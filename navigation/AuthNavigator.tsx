import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';  // Asegúrate de que la ruta sea correcta
import RegisterScreen from '../screens/RegisterScreen';  // Asegúrate de que la ruta sea correcta
import HomeScreen from '../screens/HomeScreen';

// Define los tipos de las rutas
type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="Home" component={HomeScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
