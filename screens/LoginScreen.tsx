import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { InputItem, Button, WhiteSpace } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Importar los tipos del stack
type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            {/* Logo del cine */}
            <Image 
                source={require('../assets/LOGO-MOVITIME.png')} // Ruta de la imagen local
                style={{ width: 150, height: 150, marginBottom: 20 }} 
                resizeMode="contain" 
            />

            {/* Título del cine */}
            <Text style={{ fontSize: 36, color: '#FFF', fontWeight: 'bold', marginBottom: 40, textAlign: 'center' }}>MOVITIME</Text>

            {/* Campos de entrada */}
            <InputItem
                value={username}
                onChange={setUsername}
                placeholder="Usuario"
                placeholderTextColor="#AAA"
                style={{
                    backgroundColor: '#333',
                    borderRadius: 12,
                    padding: 15,
                    color: '#FFF',  // Cambia el color del texto a blanco
                    marginBottom: 20,
                    width: '80%',
                }}
            />
            <InputItem
                value={password}
                onChange={setPassword}
                placeholder="Contraseña"
                type="password"
                placeholderTextColor="#AAA"
                style={{
                    backgroundColor: '#333',
                    borderRadius: 12,
                    padding: 15,
                    color: '#FFF',  // Cambia el color del texto a blanco
                    marginBottom: 20,
                    width: '80%',
                }}
            />

            {/* Enlace a la pantalla de registro */}
            <Text style={{ color: '#FFF', fontSize: 14, marginTop: 20, textAlign: 'center' }}>
                ¿No tienes una cuenta?{' '}
                <Text 
                    style={{ color: '#FF5733', fontWeight: 'bold', textDecorationLine: 'underline' }} 
                    onPress={() => navigation.navigate('Register')}
                >
                    Regístrate
                </Text>
            </Text>

            <WhiteSpace size="lg" />

            {/* Botón para iniciar sesión */}
            <Button 
                type="primary" 
                style={{
                    backgroundColor: '#E50914', 
                    borderRadius: 10, 
                    width: '40%', 
                    padding: 15, 
                    alignItems: 'center'
                }} 
                onPress={() => navigation.navigate('Home')}
            >
                Iniciar Sesión
            </Button>
        </View>
    );
};

export default LoginScreen;
