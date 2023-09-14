import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container_possui_conteudo: {
        flex: 1
    },
    foto_receita: {
        width: '100%',
        height: 200
    },
    nome_receita: {
        color: '#27AE60',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    conteudo_receita_descricao: {
        width: '100%',
        padding: 20
    },
    data_cadastro: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    usuario: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    container_ingredientes_modo_preparo: {
        width: '100%',
        backgroundColor: '#fafafa',
        padding: 12,
        marginTop: 20,
        marginBottom: 20,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#BDC3C7',
        borderRadius: 10
    },
    titulo_secao: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto_ingrediente_modo_preparo: {
        color: '#000000',
        fontSize: 18,
        marginTop: 10
    }
});