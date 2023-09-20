import { TouchableOpacity } from "react-native";
import estilo_tela_minhas_receitas from "../styles/estilo_tela_minhas_receitas";
import { Ionicons } from '@expo/vector-icons';

export default (props) => {

    return (
        <TouchableOpacity
        style={ estilo_tela_minhas_receitas.btn_redondo_cadastrar }
        onPress={ props.redirecionarTelaCadastrar }>
            <Ionicons name="add" size={ 50 } color="black" />
        </TouchableOpacity>
    );
}