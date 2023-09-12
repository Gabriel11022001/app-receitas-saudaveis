import { StyleSheet } from "react-native";

export default StyleSheet.create({
    estilo_item_receita: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        borderRadius: 20
    },
    container_lado_esquerdo: {
        width: '40%',
        height: '100%'
    },
    container_lado_direito: {
        width: '60%',
        padding: 30,
        borderStyle: 'solid',
        borderColor: '#BDC3C7',
        borderWidth: 1,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20
    },
    foto: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    margem_baixo_ultima_receita: {
        marginBottom: 80
    },
    margem_baixo_nao_ultima_receita: {
        marginBottom: 10
    },
    nome: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    data_registro: {
        color: '#27AE60',
        fontSize: 18,
        fontWeight: 'bold'
    },
    usuario: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18
    }
});