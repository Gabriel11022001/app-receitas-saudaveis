import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput } from "react-native";
import estilo_tela_alterar_senha from "../styles/estilo_tela_alterar_senha";
import { useEffect, useState } from "react";
import BotaoPadrao from "../components/BotaoPadrao";
import Loader from "../components/Loader";
import service from "../api/service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ novaSenha, setNovaSenha ] = useState('');
    const [ senhaAntiga, setSenhaAntiga ] = useState('');
    const [ senhaConfirmacao, setSenhaConfirmacao ] = useState('');

    const alterarSenha = async () => {
        setApresentarTelaLoad(true);

        try {
            const usuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));
            const usuario = {
                id: usuarioLogado.id,
                nova_senha: novaSenha,
                senha_antiga: senhaAntiga,
                nova_senha_confirmacao: senhaConfirmacao
            };
            const resposta = await service.put('/alterar_senha', JSON.stringify(usuario));
            const msg = resposta.data.msg;
            const conteudo = resposta.data.conteudo;
            
            if (msg === 'Senha alterada com sucesso!') {
                Alert.alert('Alteração de senha', msg, [
                    {
                        text: 'Ok',
                        onPress: () => navigation.navigate('tela_perfil'),
                        style: 'default'
                    }
                ]);
            } else {
                let msgAlerta = msg + '\n\n';

                if (conteudo != null) {

                    if (conteudo.senha_antiga != null) {
                        msgAlerta = msgAlerta + '- ' + conteudo.senha_antiga + '\n';
                    }

                    if (conteudo.nova_senha != null) {
                        msgAlerta = msgAlerta + '- ' + conteudo.nova_senha + '\n';
                    }

                    if (conteudo.nova_senha_confirmacao != null) {
                        msgAlerta = msgAlerta + '- ' + conteudo.nova_senha_confirmacao + '\n';
                    }

                }

                Alert.alert('Alteração de senha', msgAlerta);
            }

        } catch (e) {
            // console.log(e);
        }

        setApresentarTelaLoad(false);
    }

    useEffect(() => {
        setSenhaAntiga('');
        setNovaSenha('');
        setSenhaConfirmacao('');
    }, []); 

    return (
        <SafeAreaView style={ estilo_tela_alterar_senha.container }>
            { apresentarTelaLoad ? <Loader /> : false }
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