import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import estilo_tela_home from "../styles/estilo_tela_home";
import estilo_card_navegar_tela from "../styles/estilo_card_navegar_tela";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ navigation, props }) => {

    const [ nomeUsuarioLogado, setNomeUsuarioLogado ] = useState('');

    const navegarParaTela = (tela) => {
        // console.log(tela);
        navigation.navigate(tela);
    }

    const sair = () => {
        Alert.alert('Sair', 'Deseja sair do aplicativo?', [
            {
                text: 'Sim',
                onPress: () => {
                    confirmarSairApp();
                },
                style: 'destructive'
            },
            {
                text: 'Não',
                onPress: () => null,
                style: 'cancel'
            }
        ]);
    }

    const confirmarSairApp = async () => {

        try {
            await AsyncStorage.removeItem('usuario_logado');
            navigation.goBack();
        } catch (e) {
            // console.log(e);
        }

    }

    const obterUsuarioLogado = async () => {

        try {
            const usuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));
            setNomeUsuarioLogado(usuarioLogado.nome);
        } catch (e) {
            // console.log(e);
        }

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            obterUsuarioLogado();
        });
    }, []);

    return (
        <SafeAreaView style={ estilo_tela_home.container }>
            <View style={ estilo_tela_home.container_possui_conteudo }>
                <Text style={ estilo_tela_home.titulo_tela_home }>Seja bem vindo { nomeUsuarioLogado }</Text>
                <View style={ estilo_tela_home.container_navegacao }>
                    { /** navegar para a tela contendo a listagem de todas as receitas */ }
                    <TouchableOpacity
                    style={ estilo_card_navegar_tela.estilo_card_navegar }
                    onPress={ () => {
                        navegarParaTela('tela_receitas');
                    } }>
                        <Image style={ estilo_card_navegar_tela.estilo_icone } source={
                            require('../assets/frutas.png')
                        } />
                        <Text style={ estilo_card_navegar_tela.texto }>Todas as receitas</Text>
                    </TouchableOpacity>
                    { /** navegar para a tela contendo a listagem das minhar receitas */ }
                    <TouchableOpacity
                    style={ estilo_card_navegar_tela.estilo_card_navegar }
                    onPress={ () => {
                        navegarParaTela('tela_minhas_receitas');
                    } }>
                        <Image style={ estilo_card_navegar_tela.estilo_icone } source={
                            require('../assets/salada-de-frutas.png')
                        } />
                        <Text style={ estilo_card_navegar_tela.texto }>Minhas receitas</Text>
                    </TouchableOpacity>
                    { /** navegar para a tela de perfil */ }
                    <TouchableOpacity
                    style={ estilo_card_navegar_tela.estilo_card_navegar }
                    onPress={ () => {
                        navegarParaTela('tela_perfil');
                    } }>
                        <Image style={ estilo_card_navegar_tela.estilo_icone } source={
                            require('../assets/cara.png')
                        } />
                        <Text style={ estilo_card_navegar_tela.texto }>Perfil</Text>
                    </TouchableOpacity>
                    { /** sair */ }
                    <TouchableOpacity
                    style={ estilo_card_navegar_tela.estilo_card_navegar }
                    onPress={ () => {
                        sair();
                    } }>
                        <Image style={ estilo_card_navegar_tela.estilo_icone } source={
                            require('../assets/sair.png')
                        } />
                        <Text style={ estilo_card_navegar_tela.texto }>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
