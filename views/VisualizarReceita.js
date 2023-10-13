import { Alert, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import estilo_tela_visualizar_receita from "../styles/estilo_tela_visualizar_receita";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import service from "../api/service";

export default ({ navigation, route }) => {

    const [ idReceita, setIdReceita ] = useState(route.params.id);
    const [ receita, setReceita ] = useState({});
    const [ apresentarLoad, setApresentarLoad ] = useState(false);
    
    const buscarReceita = async () => {
        setApresentarLoad(true);

        try {
            const resposta = await service.get('/buscar_receita_pelo_id?id=' + idReceita);
            const msg = resposta.data.msg;
            const receita = resposta.data.conteudo;
            
            if (msg === 'Receita encontrada com sucesso!') {
                setReceita(receita);
            } else {
                Alert.alert('Aviso!', msg);
            }

        } catch (e) {
            // console.log(e);
        }

        setApresentarLoad(false);
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setReceita({});
            buscarReceita();
        });
    }, []);

    return (
        <SafeAreaView style={ estilo_tela_visualizar_receita.container }>
            { apresentarLoad ? <Loader /> : false }
            <ScrollView style={ estilo_tela_visualizar_receita.container_possui_conteudo }>
                <Image source={ require('../assets/macarons-2548827_640.jpg') } style={ estilo_tela_visualizar_receita.foto_receita } />
                <View style={ estilo_tela_visualizar_receita.conteudo_receita_descricao }>
                    <Text style={ estilo_tela_visualizar_receita.nome_receita }>{ receita.nome_receita }</Text>
                    <Text style={ estilo_tela_visualizar_receita.data_cadastro }>{ receita.data_cadastro }</Text>
                    <Text style={ estilo_tela_visualizar_receita.usuario }>{ receita.nome_usuario }</Text>
                    <View style={ estilo_tela_visualizar_receita.container_ingredientes_modo_preparo }>
                        <Text style={ estilo_tela_visualizar_receita.titulo_secao }>Ingredientes</Text>
                        <Text style={ estilo_tela_visualizar_receita.texto_ingrediente_modo_preparo }>{ receita.ingredientes }</Text>
                    </View>
                    <View style={[
                        estilo_tela_visualizar_receita.container_ingredientes_modo_preparo,
                        { marginBottom: 60 }
                    ]}>
                        <Text style={ estilo_tela_visualizar_receita.titulo_secao }>Modo de preparo</Text>
                        <Text style={ estilo_tela_visualizar_receita.texto_ingrediente_modo_preparo }>
                            { receita.modo_preparo }
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}