import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput } from "react-native";
import estilo_tela_alterar_dados_cadastrais from "../styles/estilo_tela_alterar_dados_cadastrais";
import BotaoPadrao from "../components/BotaoPadrao";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import service from "../api/service";
import Loader from "../components/Loader";

export default ({ navigation }) => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');

    const buscarDadosPerfil = async () => {
        setApresentarTelaLoad(true);
        setNome('');
        setEmail('');

        try {
            const usuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));
            const resposta = await service.get('/buscar_usuario_pelo_id?id=' + usuarioLogado.id);
            const msg = resposta.data.msg;
            const usuario = resposta.data.conteudo;

            if (msg === 'Usuário encontrado com sucesso!') {
                setNome(usuario.nome);
                setEmail(usuario.email);
            } else {
                Alert.alert('Edição de dados cadastrais', msg, [
                    {
                        text: 'Ok',
                        onPress: () => navigation.navigate('tela_perfil'),
                        style: 'destructive'
                    }
                ]);
            }

        } catch (e) {
            // console.log(e);
        }

        setApresentarTelaLoad(false);
    }

    const alterarDadosCadastrais = async () => {
        setApresentarTelaLoad(true);

        try {
            const usuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));
            const usuario = {
                id: usuarioLogado.id,
                nome: nome,
                email: email
            };
            const resposta = await service.put('/alterar_dados_cadastrais', JSON.stringify(usuario));
            const msg = resposta.data.msg;
            const conteudo = resposta.data.conteudo;

            if (msg === 'Dados cadastrais alterados com sucesso!') {
                Alert.alert('Alteração de dados cadastrais', msg);
            } else {
                let msgAlerta = msg + '\n\n';

                if (conteudo != null) {

                    if (conteudo.nome != null) {
                        msgAlerta = msgAlerta + '- ' + conteudo.nome + '\n';
                    }

                    if (conteudo.email != null) {
                        msgAlerta = msgAlerta + '- ' + conteudo.email + '\n';
                    }

                }

                Alert.alert('Alteração de dados cadastrais', msgAlerta);
            }   

        } catch (e) {
            // console.log(e);
        }

        setApresentarTelaLoad(false);
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            buscarDadosPerfil();
        });
    }, []);

    return (
        <SafeAreaView style={ estilo_tela_alterar_dados_cadastrais.container }>
            { apresentarTelaLoad ? <Loader /> : false }
            <KeyboardAvoidingView
            style={ estilo_tela_alterar_dados_cadastrais.container_possui_conteudo }
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            keyboardVerticalOffset={ 60 }>
                <ScrollView>
                    { /** campo do nome */ }
                    <TextInput
                    style={ estilo_tela_alterar_dados_cadastrais.campo }
                    onChangeText={ (nome) => {
                        setNome(nome);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Nome..."
                    value={ nome } />
                    { /** campo do e-mail */ }
                    <TextInput
                    style={ estilo_tela_alterar_dados_cadastrais.campo }
                    onChangeText={ (email) => {
                        setEmail(email);
                    } }
                    inputMode="text"
                    keyboardType="email-address"
                    placeholder="E-mail..."
                    value={ email } />
                    <BotaoPadrao textoBotao='Salvar' realizarOperacao={ alterarDadosCadastrais } />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}