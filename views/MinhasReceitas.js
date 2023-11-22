import { FlatList, SafeAreaView, Text } from "react-native";
import { useEffect, useState } from "react";
import ReceitaItem from "../components/ReceitaItem";
import estilo_tela_minhas_receitas from "../styles/estilo_tela_minhas_receitas";
import BotaoRedondoCadastrar from "../components/BotaoRedondoCadastrar";
import Loader from "../components/Loader";
import service from "../api/service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {

    const [ apresentarLoad, setApresentarLoad ] = useState(false);
    const [ receitas, setReceitas ] = useState([]);

    const visualizarReceita = (idReceita) => {
        navigation.navigate('tela_visualizar_minha_receita', {
            id: idReceita
        });
    }

    const apresentarReceitas = () => {

        if (receitas.length > 0) {

            return <FlatList 
            data={ receitas }
            renderItem={ ({ item, index }) => (
                <ReceitaItem
                ultimaReceitaListagem={ index === receitas.length - 1 ? true : false }
                nome={ item.nome_receita }
                dataRegistro={ item.data_cadastro }
                usuario={ item.nome_usuario }
                urlFoto={ item.foto.url }
                ext={ item.foto.ext }
                visualizarReceita={ () => visualizarReceita(item.id) } />
            ) }/>
        }

    }

    const buscarReceitas = async () => {
        setApresentarLoad(true);

        try {
            const dadosUsuarioLogado = JSON.parse(await AsyncStorage.getItem('usuario_logado'));
            const resposta = await service.get('/buscar_minhas_receitas?id=' + dadosUsuarioLogado.id);
            const mensagem = resposta.data.msg;
            const receitas = resposta.data.conteudo;
            
            if (mensagem === 'Receitas encontradas com sucesso!') {
                setReceitas(receitas);
            } else {
                Alert.alert('Aviso!', mensagem);
            }

        } catch (e) {
            // console.log(e);
        }

        setApresentarLoad(false);
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setReceitas([]);
            buscarReceitas();
        });
    }, []);

    const redirecionarTelaCadastrarReceita = () => {
        navigation.navigate('tela_cadastrar_receita');
    }

    return (
        <SafeAreaView style={ estilo_tela_minhas_receitas.container }>
            { apresentarLoad ? <Loader /> : false }
            { receitas.length > 0 ? apresentarReceitas() : <Text>
                Não existem receitas cadastradas no banco de dados!
            </Text> }
            <BotaoRedondoCadastrar redirecionarTelaCadastrar={ redirecionarTelaCadastrarReceita } />
        </SafeAreaView>
    );
}