import { SafeAreaView, ScrollView, Text } from "react-native";
import tela_perfil from "../styles/tela_perfil";
import BotaoPadrao from "../components/BotaoPadrao";

export default ({ navigation }) => {

    return (
        <SafeAreaView style={ tela_perfil.container }>
            <ScrollView style={ tela_perfil.container_possui_conteudo }>
                <Text style={ tela_perfil.label }>Nome</Text>
                <Text style={ tela_perfil.texto_dado }>Gabriel Rodrigues dos Santos</Text>
                <Text style={ tela_perfil.label }>E-mail</Text>
                <Text style={[ tela_perfil.texto_dado, { marginBottom: 30 } ]}>gabriel996567521@gmail.com</Text>
                <BotaoPadrao textoBotao='Alterar senha' realizarOperacao={ () => {
                    navigation.navigate('tela_alterar_senha');
                } } />
                <BotaoPadrao textoBotao='Alterar dados cadastrais' realizarOperacao={ () => {
                    navigation.navigate('tela_alterar_dados_cadastrais');
                } } />
            </ScrollView>            
        </SafeAreaView>
    );
}