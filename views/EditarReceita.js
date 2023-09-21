import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import BotaoPadrao from "../components/BotaoPadrao";
import { useEffect, useState } from "react";
import estilo_tela_editar_receita from "../styles/estilo_tela_editar_receita";

export default ({ navigation, route }) => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ idReceita, setIdReceita ] = useState(route.params.id);
    const [ nome, setNome ] = useState('Receita 1');
    const [ ingredientes, setIngredientes ] = useState('Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.');
    const [ modoPreparo, setModoPreparo ] = useState('Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.');

    const buscarReceitaPeloId = async () => {

    }

    const editarReceita = async () => {

    }

    const realizarUploadFoto = async () => {

    }

    const selecionarFotoGaleria = () => {

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            // buscarReceitaPeloId();
        });
    }, []);

    return (
        <SafeAreaView style={ estilo_tela_editar_receita.container }>
            <KeyboardAvoidingView
            style={ estilo_tela_editar_receita.container_possui_conteudo }
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            keyboardVerticalOffset={ 60 }>
                <ScrollView>
                    { /** campo do nome da receita */ }
                    <TextInput
                    style={ estilo_tela_editar_receita.campo }
                    onChangeText={ (nome) => {
                        setNome(nome);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Nome..."
                    value={ nome } />
                    { /** campo dos ingredientes */ }
                    <TextInput
                    style={ estilo_tela_editar_receita.campo }
                    onChangeText={ (ingredientes) => {
                        setIngredientes(ingredientes);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Ingredientes..."
                    multiline={ true }
                    value={ ingredientes } />
                    { /** campo do modo de preparo */ }
                    <TextInput
                    style={ estilo_tela_editar_receita.campo }
                    onChangeText={ (modoPreparo) => {
                        setModoPreparo(modoPreparo);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Modo de preparo..."
                    multiline={ true }
                    value={ modoPreparo } />
                    <Image source={ require('../assets/macarons-2548827_640.jpg') } style={ estilo_tela_editar_receita.foto } />
                    <TouchableOpacity
                    style={ estilo_tela_editar_receita.botao }
                    onPress={ selecionarFotoGaleria }>
                        <Text style={ estilo_tela_editar_receita.texto_botao }>Selecionar outra foto da galeria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[ estilo_tela_editar_receita.botao, { marginBottom: 80 } ]}
                    onPress={ editarReceita }>
                        <Text style={ estilo_tela_editar_receita.texto_botao }>Salvar edição</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}