import { Image, Text, TouchableOpacity, View } from "react-native";
import estilo_receita_item from "../styles/estilo_receita_item";

export default (props) => {

    return (
        <TouchableOpacity
        style={[ estilo_receita_item.estilo_item_receita, props.ultimaReceitaListagem ? estilo_receita_item.margem_baixo_ultima_receita : estilo_receita_item.margem_baixo_nao_ultima_receita ]}
        onPress={ props.visualizarReceita }>
            <View style={ estilo_receita_item.container_lado_esquerdo }>
                <Image style={ estilo_receita_item.foto } source={{
                    uri: 'data:image/' + props.ext + ';base64,' + props.urlFoto
                }} />
            </View>
            <View style={ estilo_receita_item.container_lado_direito }>
                <Text style={ estilo_receita_item.nome }>{ props.nome }</Text>
                <Text style={ estilo_receita_item.data_registro }>{ props.dataRegistro }</Text>
                <Text style={ estilo_receita_item.usuario }>{ props.usuario }</Text>
            </View>
        </TouchableOpacity>
    );
}