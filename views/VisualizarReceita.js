import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import estilo_tela_visualizar_receita from "../styles/estilo_tela_visualizar_receita";
import { useState } from "react";

export default ({ navigation, route }) => {

    const [ idReceita, setIdReceita ] = useState(route.params.id);

    return (
        <SafeAreaView style={ estilo_tela_visualizar_receita.container }>
            <ScrollView style={ estilo_tela_visualizar_receita.container_possui_conteudo }>
                <Image source={ require('../assets/macarons-2548827_640.jpg') } style={ estilo_tela_visualizar_receita.foto_receita } />
                <View style={ estilo_tela_visualizar_receita.conteudo_receita_descricao }>
                    <Text style={ estilo_tela_visualizar_receita.nome_receita }>Nome da receita</Text>
                    <Text style={ estilo_tela_visualizar_receita.data_cadastro }>11/09/2023</Text>
                    <Text style={ estilo_tela_visualizar_receita.usuario }>Gabriel</Text>
                    <View style={ estilo_tela_visualizar_receita.container_ingredientes_modo_preparo }>
                        <Text style={ estilo_tela_visualizar_receita.titulo_secao }>Ingredientes</Text>
                        <Text style={ estilo_tela_visualizar_receita.texto_ingrediente_modo_preparo }>
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                        </Text>
                    </View>
                    <View style={[
                        estilo_tela_visualizar_receita.container_ingredientes_modo_preparo,
                        { marginBottom: 60 }
                    ]}>
                        <Text style={ estilo_tela_visualizar_receita.titulo_secao }>Modo de preparo</Text>
                        <Text style={ estilo_tela_visualizar_receita.texto_ingrediente_modo_preparo }>
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}