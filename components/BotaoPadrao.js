import { TouchableOpacity } from "react-native";
import estilo_botao_padrao from "../styles/estilo_botao_padrao";
import { Text } from "react-native";

export default (props) => {

    return (
        <TouchableOpacity
        style={ estilo_botao_padrao.estilo_btn }
        onPress={ props.realizarOperacao }>
            <Text style={ estilo_botao_padrao.estilo_txt_botao }>{ props.textoBotao }</Text>
        </TouchableOpacity>
    );
}