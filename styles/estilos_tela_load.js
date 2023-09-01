import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    estilo_tela_load: {
        width: '100%',
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(39, 174, 96, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999
    }
});