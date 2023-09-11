import { SafeAreaView } from "react-native";
import estilo_tela_login from "../styles/estilo_tela_login";
import { Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { Platform } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import BotaoPadrao from "../components/BotaoPadrao";
import { useState } from "react";
import { Alert } from "react-native";
import Loader from "../components/Loader";
import { TouchableOpacity } from "react-native";

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
            const endpoint = '/usuario/login';
        } catch (e) {
            console.log(e);
        }

    }

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
                        navigation.navigate('tela_home');
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
