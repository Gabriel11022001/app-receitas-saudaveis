import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container_possui_conteudo: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 25
    },
    titulo_tela_home: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20
    },
    container_navegacao: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
});