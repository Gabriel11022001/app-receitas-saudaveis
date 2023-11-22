import { Alert, FlatList, SafeAreaView, Text } from "react-native";
import estilo_tela_receitas from "../styles/estilo_tela_receitas";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ReceitaItem from "../components/ReceitaItem";
import service from "../api/service";

export default ({ navigation }) => {

    const [ apresentarLoad, setApresentarLoad ] = useState(false);
    const [ receitas, setReceitas ] = useState([]);

    const visualizarReceita = (idReceita) => {
        navigation.navigate('tela_visualizar_receita', {
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
            const resposta = await service.get('/receitas');
            const mensagem = resposta.data.msg;
            const receitas = resposta.data.conteudo;
            console.log(receitas);
            
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

    return (
        <SafeAreaView style={ estilo_tela_receitas.container }>
            { apresentarLoad ? <Loader /> : false }
            { receitas.length > 0 ? apresentarReceitas() : <Text>
                Não existem receitas cadastradas no banco de dados!
            </Text> }
        </SafeAreaView>
    );
}