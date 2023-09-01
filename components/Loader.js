import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native";
import estilos_tela_load from "../styles/estilos_tela_load";

export default () => {

    return (
        <SafeAreaView style={ estilos_tela_load.estilo_tela_load }>
            <ActivityIndicator size='large' color='#ffffff' />
        </SafeAreaView>
    );
}