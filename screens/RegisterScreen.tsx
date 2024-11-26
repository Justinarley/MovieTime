import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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

    const handleInputChange = (field: keyof typeof form, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [field]: value }));
    };

    const handleRegister = () => {
        if (!acceptTerms) {
            alert('Debe aceptar los términos y condiciones');
            return;
        }
        alert('Registro exitoso');
        navigation.navigate('Login');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                {/* Título de la pantalla */}
                <Text style={styles.title}>Registro</Text>

                {/* Campos del formulario */}
                {Object.keys(form).map((key) => {
                    const field = key as keyof typeof form; // Aseguramos que "field" sea del tipo correcto
                    const placeholders: Record<keyof typeof form, string> = {
                        cedula: 'Número de cédula',
                        nombre: 'Nombre',
                        apellido: 'Apellido',
                        correo: 'Correo electrónico',
                        celular: 'Número de celular',
                        fechaNacimiento: 'Fecha de nacimiento (YYYY-MM-DD)',
                    };

                    return (
                        <TextInput
                            key={field}
                            value={form[field]}
                            placeholder={placeholders[field]}
                            placeholderTextColor="#AAA"
                            onChangeText={(value) => handleInputChange(field, value)}
                            style={styles.input}
                            keyboardType={
                                field === 'correo'
                                    ? 'email-address'
                                    : field === 'celular'
                                    ? 'phone-pad'
                                    : 'default'
                            }
                        />
                    );
                })}

                {/* Checkbox para términos y condiciones */}
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            acceptTerms && { backgroundColor: '#E50914' },
                        ]}
                        onPress={() => setAcceptTerms(!acceptTerms)}
                    />
                    <Text style={styles.checkboxText}>
                        Acepto los términos y condiciones
                    </Text>
                </View>

                {/* Botón de registro */}
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                {/* Botón para regresar al login */}
                <Text style={styles.loginText}>
                    ¿Ya tienes cuenta?{' '}
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Inicia sesión
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#333',
        borderRadius: 12,
        padding: 15,
        color: '#FFF',
        marginBottom: 20,
        width: '80%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#FFF',
        marginRight: 10,
    },
    checkboxText: {
        color: '#FFF',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#E50914',
        borderRadius: 10,
        width: '80%',
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        color: '#FFF',
        fontSize: 14,
        marginTop: 10,
    },
    loginLink: {
        color: '#FF5733',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;
