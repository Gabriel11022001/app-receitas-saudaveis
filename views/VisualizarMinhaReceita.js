import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import estilo_tela_visualizar_minha_receita from "../styles/estilo_tela_visualizar_minha_receita";
import BotaoPadrao from "../components/BotaoPadrao";
import service from "../api/service";
import Loader from "../components/Loader";

export default ({ navigation, route }) => {

    const [ idReceita, setIdReceita ] = useState(route.params.id);
    const [ receita, setReceita ] = useState({});
    const [ apresentarLoad, setApresentarLoad ] = useState(false);

    const deletarReceita = () => {
        Alert.alert('Deletar receita', 'Deseja mesmo deletar essa receita?', [
            {
                text: 'Sim',
                onPress: () => {
                    efetivarDelecao();
                },
                style: 'destructive'
            },
            {
                text: 'Não',
                onPress: null,
                style: 'cancel'
            }
        ]);
    }

    const efetivarDelecao = async () => {
        setApresentarLoad(true);

        try {
            const resposta = await service.delete('/deletar_receita?id=' + idReceita);
            const msg = resposta.data.msg;

            if (msg === 'Receita deletada com sucesso!') {
                Alert.alert('Deletar receita!', msg, [
                    {
                        text: 'Ok',
                        onPress: () => {
                            navigation.navigate('tela_minhas_receitas');
                        },
                        style: 'default'
                    }
                ]);
            } else {

            }

        } catch (e) {
            console.log(e);
        }

        setApresentarLoad(false);
    }

    const redirecionarTelaEditarReceita = () => {
        navigation.navigate('tela_editar_receita', {
            id: idReceita
        });
    }

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
        <SafeAreaView style={ estilo_tela_visualizar_minha_receita.container }>
            { apresentarLoad ? <Loader /> : false }
            <ScrollView style={ estilo_tela_visualizar_minha_receita.container_possui_conteudo }>
                <Image source={ require('../assets/macarons-2548827_640.jpg') } style={ estilo_tela_visualizar_minha_receita.foto_receita } />
                <View style={ estilo_tela_visualizar_minha_receita.conteudo_receita_descricao }>
                    <Text style={ estilo_tela_visualizar_minha_receita.nome_receita }>{ receita.nome_receita }</Text>
                    <Text style={ estilo_tela_visualizar_minha_receita.data_cadastro }>{ receita.data_cadastro }</Text>
                    <Text style={ estilo_tela_visualizar_minha_receita.usuario }>{ receita.nome_usuario }</Text>
                    <View style={ estilo_tela_visualizar_minha_receita.container_ingredientes_modo_preparo }>
                        <Text style={ estilo_tela_visualizar_minha_receita.titulo_secao }>Ingredientes</Text>
                        <Text style={ estilo_tela_visualizar_minha_receita.texto_ingrediente_modo_preparo }>
                            { receita.ingredientes }
                        </Text>
                    </View>
                    <View style={[
                        estilo_tela_visualizar_minha_receita.container_ingredientes_modo_preparo,
                        { marginBottom: 60 }
                    ]}>
                        <Text style={ estilo_tela_visualizar_minha_receita.titulo_secao }>Modo de preparo</Text>
                        <Text style={ estilo_tela_visualizar_minha_receita.texto_ingrediente_modo_preparo }>
                            { receita.modo_preparo }
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                style={ estilo_tela_visualizar_minha_receita.btn_editar }
                onPress={ redirecionarTelaEditarReceita }>
                    <Text style={ estilo_tela_visualizar_minha_receita.txt_botao }>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={ estilo_tela_visualizar_minha_receita.btn_deletar }
                onPress={ deletarReceita }>
                    <Text style={ estilo_tela_visualizar_minha_receita.txt_botao }>Deletar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}