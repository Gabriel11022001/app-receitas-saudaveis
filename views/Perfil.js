import { Alert, SafeAreaView, ScrollView, Text } from "react-native";
import tela_perfil from "../styles/tela_perfil";
import BotaoPadrao from "../components/BotaoPadrao";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import service from "../api/service";

export default ({ navigation }) => {

    const [ apresentarLoad, setApresentarLoad ] = useState(false);
    const [ usuario, setUsuario ] = useState({});

    const buscarUsuarioPeloId = async () => {
        setApresentarLoad(true);

        try {
            const usuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));
            const resposta = await service.get('/buscar_usuario_pelo_id?id=' + usuarioLogado.id);
            const msg = resposta.data.msg;
            const usuario = resposta.data.conteudo;
            
            if (msg === 'Usuário encontrado com sucesso!') {
                setUsuario(usuario);
            } else {
                Alert.alert('Perfil', msg, [
                    {
                        text: 'Ok',
                        onPress: () => navigation.navigate('tela_home'),
                        style: 'destructive'
                    }
                ]);
            }
            
        } catch (e) {
            console.log(e);
        }

        setApresentarLoad(false);
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setUsuario({});
            buscarUsuarioPeloId();
        });
    }, []);

    return (
        <SafeAreaView style={ tela_perfil.container }>
            { apresentarLoad ? <Loader /> : false }
            <ScrollView style={ tela_perfil.container_possui_conteudo }>
                <Text style={ tela_perfil.label }>Nome</Text>
                <Text style={ tela_perfil.texto_dado }>{ usuario != null ? usuario.nome : '--- Nome não informado ---' }</Text>
                <Text style={ tela_perfil.label }>E-mail</Text>
                <Text style={[ tela_perfil.texto_dado, { marginBottom: 30 } ]}>
                    { usuario != null ? usuario.email : '--- E-mail não informado ---' }
                </Text>
                <BotaoPadrao textoBotao='Alterar senha' realizarOperacao={ () => {
                    navigation.navigate('tela_alterar_senha');
                } } />
                <BotaoPadrao textoBotao='Alterar dados cadastrais' realizarOperacao={ () => {
                    navigation.navigate('tela_alterar_dados_cadastrais');
                } } />
            </ScrollView>            
        </SafeAreaView>
    );
}