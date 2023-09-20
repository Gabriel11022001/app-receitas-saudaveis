import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput } from "react-native";
import estilo_tela_alterar_senha from "../styles/estilo_tela_alterar_senha";
import { useState } from "react";
import BotaoPadrao from "../components/BotaoPadrao";

export default () => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ novaSenha, setNovaSenha ] = useState('');
    const [ senhaAntiga, setSenhaAntiga ] = useState('');
    const [ senhaConfirmacao, setSenhaConfirmacao ] = useState('');

    const alterarSenha = async () => {
        
    }

    return (
        <SafeAreaView style={ estilo_tela_alterar_senha.container }>
            <KeyboardAvoidingView
            style={ estilo_tela_alterar_senha.container_possui_conteudo }
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            keyboardVerticalOffset={ 60 }>
                <ScrollView>
                    { /** campo da senha antiga */ }
                    <TextInput
                    style={ estilo_tela_alterar_senha.campo }
                    onChangeText={ (senhaAntiga) => {
                        setSenhaAntiga(senhaAntiga);
                    } }
                    inputMode="text"
                    keyboardType="visible-password"
                    secureTextEntry={ true }
                    placeholder="Senha antiga..." />
                    { /** campo da nova senha */ }
                    <TextInput
                    style={ estilo_tela_alterar_senha.campo }
                    onChangeText={ (novaSenha) => {
                        setNovaSenha(novaSenha);
                    } }
                    inputMode="text"
                    keyboardType="visible-password"
                    secureTextEntry={ true }
                    placeholder="Nova senha..." />
                    { /** campo da senha de confirmação */ }
                    <TextInput
                    style={ estilo_tela_alterar_senha.campo }
                    onChangeText={ (senhaConfirmacao) => {
                        setSenhaConfirmacao(senhaConfirmacao);
                    } }
                    inputMode="text"
                    keyboardType="visible-password"
                    secureTextEntry={ true }
                    placeholder="Senha de confirmação..." />
                    <BotaoPadrao textoBotao='Salvar' realizarOperacao={ alterarSenha } />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}