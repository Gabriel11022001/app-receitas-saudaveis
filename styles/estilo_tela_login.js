import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    titulo_tela_login: {
        color: '#27AE60',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    container_possui_conteudo: {
        flex: 1,
        padding: 27,
        width: '100%',
        height: '100%'
    },
    estilo_imagem_frutas: {
        width: 170,
        height: 170,
        marginBottom: 10
    },
    container_possui_imagem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
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
    btn_registrarse: {
        marginTop: 40
    },
    estilo_txt_registrarse: {
        fontSize: 20,
        color: '#000000',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: '#000000'
    }
});