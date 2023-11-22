import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput } from "react-native";
import BotaoPadrao from "../components/BotaoPadrao";
import { useState } from "react";
import estilo_tela_cadastrar_receita from "../styles/estilo_tela_cadastrar_receita";
import * as ImagePicker from 'expo-image-picker';
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import service from "../api/service";

export default ({ navigation }) => {

    const [ foto, setFoto ] = useState('');
    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ nome, setNome ] = useState('');
    const [ ingredientes, setIngredientes ] = useState('');
    const [ modoPreparo, setModoPreparo ] = useState('');

    const cadastrarReceita = async () => {
        setApresentarTelaLoad(true);

        try {
            const dadosUsuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));

            if (foto === '') {
                Alert.alert('Cadastro de receita', 'Informe a foto da receita!');
                setApresentarTelaLoad(false);

                return;
            }

            let formData = new FormData();
            let nomeArquivo = foto.substring(
                foto.lastIndexOf('/') + 1,
                foto.length
            );
            let uriArquivo = foto;
            let typeArquivo = 'image/' + nomeArquivo.split('.')[1];
            // definindo os dados da solicitação de serviço
            formData.append('foto_receita', JSON.parse(JSON.stringify({
                name: nomeArquivo,
                uri: uriArquivo,
                type: typeArquivo
            })));
            formData.append('nome', nome);
            formData.append('ingredientes', ingredientes);
            formData.append('usuario_id', dadosUsuarioLogado.id);
            formData.append('modo_preparo', modoPreparo);
            const resposta = await service.post('/cadastrar_receita', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            const msg = resposta.data.msg;
            const conteudo = resposta.data.conteudo;

            if (msg === 'Receita cadastrada com sucesso!') {
                Alert.alert('Cadastro de receita', msg, [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('tela_minhas_receitas'),
                        style: 'default'
                    }
                ]);
            } else {
                let msgApresentar = msg;

                if (conteudo.nome != null) {
                    msgApresentar = msgApresentar + '-' + conteudo.nome + '\n';
                }

                if (conteudo.modo_preparo != null) {
                    msgApresentar = msgApresentar + '-' + conteudo.modo_preparo + '\n';
                }

                if (conteudo.ingredientes != null) {
                    msgApresentar = msgApresentar + '-' + conteudo.ingredientes + '\n';
                }

                if (conteudo.foto_receita != null) {
                    msgApresentar = msgApresentar + '-' + conteudo.foto_receita + '\n';
                }

                Alert.alert('Cadastro de receita', msg);
            }

        } catch (e) {
            console.log(e);
        }

        setApresentarTelaLoad(false);
    }

    const selecionarFotoGaleria = async () => {

        try {
            let resultado = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
                base64: false
            });

            if (!resultado.canceled) {
                setFoto(resultado.assets[0].uri);
            }

        } catch (e) {
            // console.log(e);
        }

    }

    return (
        <SafeAreaView style={ estilo_tela_cadastrar_receita.container }>
            { apresentarTelaLoad ? <Loader /> : false }
            <KeyboardAvoidingView
            style={ estilo_tela_cadastrar_receita.container_possui_conteudo }
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            keyboardVerticalOffset={ 60 }>
                <ScrollView>
                    { /** campo do nome da receita */ }
                    <TextInput
                    style={ estilo_tela_cadastrar_receita.campo }
                    onChangeText={ (nome) => {
                        setNome(nome);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Nome..." />
                    { /** campo dos ingredientes */ }
                    <TextInput
                    style={ estilo_tela_cadastrar_receita.campo }
                    onChangeText={ (ingredientes) => {
                        setIngredientes(ingredientes);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Ingredientes..."
                    multiline={ true } />
                    { /** campo do modo de preparo */ }
                    <TextInput
                    style={ estilo_tela_cadastrar_receita.campo }
                    onChangeText={ (modoPreparo) => {
                        setModoPreparo(modoPreparo);
                    } }
                    inputMode="text"
                    keyboardType="default"
                    placeholder="Modo de preparo..."
                    multiline={ true } />
                    <BotaoPadrao textoBotao='Selecionar foto da galeria' realizarOperacao={ selecionarFotoGaleria } />
                    <BotaoPadrao textoBotao='Salvar' realizarOperacao={ cadastrarReceita } />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}