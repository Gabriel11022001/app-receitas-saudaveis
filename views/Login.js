import { SafeAreaView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo_tela_login from "../styles/estilo_tela_login";
import { Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { Platform } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import BotaoPadrao from "../components/BotaoPadrao";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import Loader from "../components/Loader";
import { TouchableOpacity } from "react-native";
import service from "../api/service";

export default ({ navigation }) => {

    const [ apresentarTelaLoad, setApresentarTelaLoad ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    // função para realizar o login do usuário
    const login = async () => {
        setApresentarTelaLoad(true);

        try {
            const dadosUsuario = {
                email: email,
                senha: senha
            };
            const resp = await service.post('/login', dadosUsuario);
            const msg = resp.data.msg;
            const cont = resp.data.conteudo;

            if (msg === 'Login efetuado com sucesso!') {
                await AsyncStorage.setItem('usuario_logado', JSON.stringify(resp.data.conteudo));
                navigation.navigate('tela_home');
            } else {
                let msgAlerta = msg + '\n\n';
                
                if (cont != null) {

                    if (cont.email != null) {
                        msgAlerta = msgAlerta + '-' + cont.email + '\n\n';
                    }

                    if (cont.senha != null) {
                        msgAlerta = msgAlerta + '-' + cont.senha + '\n\n';
                    }

                }

                Alert.alert('Login', msgAlerta);
            }

        } catch (e) {
            // console.log(e);
        }

        setApresentarTelaLoad(false);
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setEmail('');
            setSenha('');
        });
    }, []);

    return (
        <SafeAreaView style={ estilo_tela_login.container }>
            { apresentarTelaLoad ? <Loader /> : false }
            <ScrollView>
                <KeyboardAvoidingView
                style={ estilo_tela_login.container_possui_conteudo }
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                keyboardVerticalOffset={ 60 }>
                    <View style={ estilo_tela_login.container_possui_imagem }>
                        <Image style={ estilo_tela_login.estilo_imagem_frutas } source={ require('../assets/salada-de-frutas.png') } />
                    </View>
                    <Text style={ estilo_tela_login.titulo_tela_login }>Seja bem vindo!</Text>
                    { /** campo de e-mail */ }
                    <TextInput 
                    style={ estilo_tela_login.input }
                    placeholder='E-mail'
                    inputMode='email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={ email }
                    onChangeText={ (email) => {
                        setEmail(email);
                    } } />
                    { /** campo de senha */ }
                    <TextInput 
                    style={ estilo_tela_login.input }
                    placeholder='Senha'
                    inputMode='text'
                    secureTextEntry={ true }
                    keyboardType='visible-password'
                    maxLength={ 25 }
                    value={ senha }
                    onChangeText={ (senha) => {
                        setSenha(senha);
                    } } />
                    <BotaoPadrao textoBotao='Entrar' realizarOperacao={ () => {
                        login();
                    } } />
                    <TouchableOpacity
                    style={ estilo_tela_login.btn_registrarse }
                    onPress={ () => {
                        navigation.navigate('tela_registrarse');
                    } }>
                        <Text style={ estilo_tela_login.estilo_txt_registrarse }>Registrar-se</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
