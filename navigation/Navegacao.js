import { NavigationContainer } from "@react-navigation/native";
import Login from "../views/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registrarse from "../views/Registrarse";
import Home from "../views/Home";
import Receitas from "../views/Receitas";
import VisualizarReceita from "../views/VisualizarReceita";
import Perfil from "../views/Perfil";
import AlterarSenha from "../views/AlterarSenha";
import AlterarDadosCadastrais from "../views/AlterarDadosCadastrais";
import MinhasReceitas from "../views/MinhasReceitas";
import CadastrarReceita from "../views/CadastrarReceita";
import VisualizarMinhaReceita from "../views/VisualizarMinhaReceita";

export default () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='tela_login'>
                <Stack.Screen
                name='tela_login'
                component={ Login }
                options={ {
                    title: 'Login',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    }
                } } />
                <Stack.Screen
                name='tela_registrarse'
                component={ Registrarse }
                options={ {
                    title: 'Registrar-se',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_home'
                component={ Home }
                options={ {
                    title: 'Home',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: false
                } } />
                <Stack.Screen
                name='tela_receitas'
                component={ Receitas }
                options={ {
                    title: 'Receitas',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_visualizar_receita'
                component={ VisualizarReceita }
                options={ {
                    title: 'Receita',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_perfil'
                component={ Perfil }
                options={ {
                    title: 'Perfil',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_alterar_senha'
                component={ AlterarSenha }
                options={ {
                    title: 'Alterar senha',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_alterar_dados_cadastrais'
                component={ AlterarDadosCadastrais }
                options={ {
                    title: 'Alterar dados cadastrais',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_minhas_receitas'
                component={ MinhasReceitas }
                options={ {
                    title: 'Minhas receitas',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_cadastrar_receita'
                component={ CadastrarReceita }
                options={ {
                    title: 'Cadastrar receita',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
                <Stack.Screen
                name='tela_visualizar_minha_receita'
                component={ VisualizarMinhaReceita }
                options={ {
                    title: 'Minha receita',
                    headerTintColor: '#ffffff',
                    navigationBarColor: '#27AE60',
                    headerStyle: {
                        backgroundColor: '#27AE60'
                    },
                    headerBackButtonMenuEnabled: true
                } } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}