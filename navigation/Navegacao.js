import { NavigationContainer } from "@react-navigation/native";
import Login from "../views/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registrarse from "../views/Registrarse";
import Home from "../views/Home";
import Receitas from "../views/Receitas";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}