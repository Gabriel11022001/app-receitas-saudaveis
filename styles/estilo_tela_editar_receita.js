import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    container_possui_conteudo: {
        flex: 1,
        padding: 20
    },
    campo: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 25,
        color: '#000000'
    },
    botao: {
        width: '100%',
        padding: 12,
        borderRadius: 15,
        backgroundColor: '#27AE60',
        marginTop: 20
    },
    texto_botao: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    foto: {
        width: '100%',
        height: 200
    }
});