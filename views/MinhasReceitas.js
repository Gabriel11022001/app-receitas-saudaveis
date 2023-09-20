import { FlatList, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import ReceitaItem from "../components/ReceitaItem";
import estilo_tela_minhas_receitas from "../styles/estilo_tela_minhas_receitas";
import BotaoRedondoCadastrar from "../components/BotaoRedondoCadastrar";

export default ({ navigation }) => {

    const [ receitas, setReceitas ] = useState([
        {
            id: 1,
            nome: 'Bolo 1',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 2,
            nome: 'Bolo 2',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 3,
            nome: 'Bolo 3',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 4,
            nome: 'Bolo 4',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 5,
            nome: 'Bolo 5',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 6,
            nome: 'Bolo 6',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 7,
            nome: 'Bolo 7',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 8,
            nome: 'Bolo 8',
            data_registro: '11/09/2023',
            usuario: 'Gabriel'
        },
        {
            id: 9,
            nome: 'Bolo 9 fuhfiuhrsifuhgiurhsfiuhrsihu',
            data_registro: '11/09/2023',
            usuario: 'Gabriel Rodrigues dos Santos'
        }
    ]);

    const visualizarReceita = (idReceita) => {
        navigation.navigate('tela_visualizar_minha_receita', {
            id: '' + idReceita
        });
    }

    const apresentarReceitas = () => {

        if (receitas.length > 0) {

            return <FlatList 
            data={ receitas }
            renderItem={ ({ item, index }) => (
                <ReceitaItem
                ultimaReceitaListagem={ index === receitas.length - 1 ? true : false }
                nome={ item.nome }
                dataRegistro={ item.data_registro }
                usuario={ item.usuario }
                urlFoto=''
                visualizarReceita={ () => visualizarReceita(item.id) } />
            ) }/>
        }

    }

    const redirecionarTelaCadastrarReceita = () => {
        navigation.navigate('tela_cadastrar_receita');
    }

    return (
        <SafeAreaView style={ estilo_tela_minhas_receitas.container }>
            { apresentarReceitas() }
            <BotaoRedondoCadastrar redirecionarTelaCadastrar={ redirecionarTelaCadastrarReceita } />
        </SafeAreaView>
    );
}