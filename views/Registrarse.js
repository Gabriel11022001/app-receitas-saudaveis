import { SafeAreaView } from "react-native";
import estilos_tela_registrarse from "../styles/estilos_tela_registrarse";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { Platform } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import service from "../api/service";
import { Alert } from "react-native";
import Loader from "../components/Loader";

export default ({ navigation }) => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ senhaConfirmacao, setSenhaConfirmacao ] = useState('');

    const registrarse = async () => {
        setApresentarTelaLoad(true);

        try {
            const usuario = {
                nome: nome,
                email: email,
                senha: senha,
                senha_confirmacao: senhaConfirmacao
            };
            const resp = await service.post('/registrar-se', usuario);
            let msg = resp.data.msg;
            
            if (msg === 'Cadastro realizado com sucesso!') {
                Alert.alert('Registrar-se', msg, [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('tela_login');
                        },
                        style: 'default'
                    }
                ]);
            } else {
                let msgAlerta = msg + '\n\n';

                if (resp.data.conteudo != null) {

                    if (resp.data.conteudo.nome != null) {
                        msgAlerta = msgAlerta + '-' + resp.data.conteudo.nome + '\n\n';
                    } 
    
                    if (resp.data.conteudo.email != null) {
                        msgAlerta = msgAlerta + '-' + resp.data.conteudo.email + '\n\n';
                    }
    
                    if (resp.data.conteudo.senha != null) {
                        msgAlerta = msgAlerta + '-' + resp.data.conteudo.senha + '\n\n';
                    }
    
                    if (resp.data.conteudo.senha_confirmacao != null) {
                        msgAlerta = msgAlerta + '-' + resp.data.conteudo.senha_confirmacao + '\n';
                    }

                }

                Alert.alert('Registrar-se', msgAlerta);
            }

        } catch (e) {
            // console.log(e);
        }

        setApresentarTelaLoad(false);
    }

    return (
        <SafeAreaView style={ estilos_tela_registrarse.container }>
            { apresentarTelaLoad ? <Loader /> : false }
            <KeyboardAvoidingView
            style={ estilos_tela_registrarse.container_possui_conteudo }
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            keyboardVerticalOffset={ 60 }>
                <ScrollView> 
                    { /** campo de nome */ }
                    <TextInput 
                    style={ estilos_tela_registrarse.input }
                    keyboardType='default'
                    placeholder='Nome*'
                    maxLength={ 255 }
                    inputMode='text'
                    value={ nome }
                    onChangeText={ (nome) => {
                        setNome(nome);
                    } } />
                    { /** campo de e-mail */ }
                    <TextInput 
                    style={ estilos_tela_registrarse.input }
                    keyboardType='email-address'
                    placeholder='E-mail*'
                    maxLength={ 255 }
                    inputMode='email'
                    value={ email }
                    onChangeText={ (email) => {
                        setEmail(email);
                    } } />
                    { /** campo de senha */ }
                    <TextInput 
                    style={ estilos_tela_registrarse.input }
                    keyboardType='default'
                    placeholder='Senha*'
                    maxLength={ 25 }
                    inputMode='text'
                    secureTextEntry={ true }
                    value={ senha }
                    onChangeText={ (senha) => {
                        setSenha(senha);
                    } } />
                    { /** campo de senha de confirmação */ }
                    <TextInput 
                    style={ estilos_tela_registrarse.input }
                    keyboardType='default'
                    placeholder='Confirmação de senha*'
                    maxLength={ 25 }
                    inputMode='text'
                    secureTextEntry={ true }
                    value={ senhaConfirmacao }
                    onChangeText={ (senhaConfirmacao) => {
                        setSenhaConfirmacao(senhaConfirmacao);
                    } } />
                    <TouchableOpacity
                    style={ estilos_tela_registrarse.btn_registrarse }
                    onPress={ () => {
                        registrarse();
                    } }>
                        <Text style={ estilos_tela_registrarse.txt_btn_registrarse }>Registrar-se</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}