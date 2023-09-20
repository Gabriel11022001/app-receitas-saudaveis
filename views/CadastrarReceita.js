import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput } from "react-native";
import BotaoPadrao from "../components/BotaoPadrao";
import { useState } from "react";
import estilo_tela_cadastrar_receita from "../styles/estilo_tela_cadastrar_receita";

export default () => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ nome, setNome ] = useState('');
    const [ ingredientes, setIngredientes ] = useState('');
    const [ modoPreparo, setModoPreparo ] = useState('');

    const cadastrarReceita = async () => {

    }

    const realizarUploadFoto = async () => {

    }

    const selecionarFotoGaleria = () => {

    }

    return (
        <SafeAreaView style={ estilo_tela_cadastrar_receita.container }>
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