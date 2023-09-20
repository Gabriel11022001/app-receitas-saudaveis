import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TextInput } from "react-native";
import estilo_tela_alterar_dados_cadastrais from "../styles/estilo_tela_alterar_dados_cadastrais";
import BotaoPadrao from "../components/BotaoPadrao";
import { useState } from "react";

export default () => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');

    const alterarDadosCadastrais = async () => {

    }

    return (
        <SafeAreaView style={ estilo_tela_alterar_dados_cadastrais.container }>
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
                    placeholder="Nome..." />
                    { /** campo do e-mail */ }
                    <TextInput
                    style={ estilo_tela_alterar_dados_cadastrais.campo }
                    onChangeText={ (email) => {
                        setEmail(email);
                    } }
                    inputMode="text"
                    keyboardType="email-address"
                    placeholder="E-mail..." />
                    <BotaoPadrao textoBotao='Salvar' realizarOperacao={ alterarDadosCadastrais } />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}