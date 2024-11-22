import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { InputItem, Button, Checkbox } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Importar los tipos del stack
type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;

const RegisterScreen: React.FC = () => {
    const [form, setForm] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        fechaNacimiento: '',
    });

    const [acceptTerms, setAcceptTerms] = useState(false);
    const navigation = useNavigation<RegisterScreenNavigationProp>();

    const handleInputChange = (field: string, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [field]: value }));
    };

    const handleRegister = () => {
        if (!acceptTerms) {
            alert('Debe aceptar los términos y condiciones');
            return;
        }
        // Aquí puedes añadir la lógica para registrar al usuario
        alert('Registro exitoso');
        navigation.navigate('Login');
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
            <View style={{ width: '100%', maxWidth: 400, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                {/* Título de la pantalla */}
                <Text style={{ fontSize: 28, color: '#FFF', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>Registro</Text>

                {/* Campos del formulario */}
                <InputItem
                    value={form.cedula}
                    placeholder="Número de cédula"
                    placeholderTextColor="#AAA"
                    onChangeText={(value) => handleInputChange('cedula', value)}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 15,
                        color: '#FFF', // Color del texto blanco
                        marginBottom: 20,
                        width: '80%',
                    }}
                />
                <InputItem
                    value={form.nombre}
                    placeholder="Nombre"
                    placeholderTextColor="#AAA"
                    onChangeText={(value) => handleInputChange('nombre', value)}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 15,
                        color: '#FFF', // Color del texto blanco
                        marginBottom: 20,
                        width: '80%',
                    }}
                />
                <InputItem
                    value={form.apellido}
                    placeholder="Apellido"
                    placeholderTextColor="#AAA"
                    onChangeText={(value) => handleInputChange('apellido', value)}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 15,
                        color: '#FFF', // Color del texto blanco
                        marginBottom: 20,
                        width: '80%',
                    }}
                />
                <InputItem
                    value={form.correo}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#AAA"
                    onChangeText={(value) => handleInputChange('correo', value)}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 15,
                        color: '#FFF', // Color del texto blanco
                        marginBottom: 20,
                        width: '80%',
                    }}
                    type="email-address"
                />
                <InputItem
                    value={form.celular}
                    placeholder="Número de celular"
                    placeholderTextColor="#AAA"
                    onChangeText={(value) => handleInputChange('celular', value)}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 15,
                        color: '#FFF', // Color del texto blanco
                        marginBottom: 20,
                        width: '80%',
                    }}
                    type="phone-pad"
                />
                <InputItem
                    value={form.fechaNacimiento}
                    placeholder="Fecha de nacimiento (YYYY-MM-DD)"
                    placeholderTextColor="#AAA"
                    onChangeText={(value) => handleInputChange('fechaNacimiento', value)}
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 15,
                        color: '#FFF', // Color del texto blanco
                        marginBottom: 20,
                        width: '80%',
                    }}
                />

                {/* Checkbox para términos y condiciones */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Checkbox
                        checked={acceptTerms}
                        onChange={() => setAcceptTerms(!acceptTerms)}
                    />
                    <Text style={{ color: '#FFF', marginLeft: 10, fontSize: 14 }}>Acepto los términos y condiciones</Text>
                </View>

                {/* Botón de registro */}
                <Button
                    type="primary"
                    style={{
                        backgroundColor: '#E50914',
                        borderRadius: 10,
                        width: '80%',
                        padding: 15,
                        alignItems: 'center',
                        marginBottom: 20,
                    }}
                    onPress={handleRegister}
                >
                    Registrar
                </Button>

                {/* Botón para regresar al login */}
                <Text style={{ color: '#FFF', fontSize: 14, marginTop: 10 }}>
                    ¿Ya tienes cuenta?{' '}
                    <Text
                        style={{ color: '#FF5733', fontWeight: 'bold', textDecorationLine: 'underline' }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Inicia sesión
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;
