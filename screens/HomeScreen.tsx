import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Card, InputItem, Carousel } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    // Datos de las imágenes del carrusel
    const carouselData = [
        require('../assets/imagen1.jpg'),
        require('../assets/imagen2.jpg'),
        require('../assets/imagen3.jpg')
    ];

    const manualCarouselData = [
        require('../assets/imagen4.jpg'),
        require('../assets/imagen5.jpg'),
        require('../assets/imagen6.jpg')
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
            {/* Sección de logo y título */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image 
                    source={require('../assets/LOGO-MOVITIME.png')} 
                    style={{ width: 40, height: 40, marginRight: 10 }} 
                    resizeMode="contain" 
                />
                <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold' }}>MOVITIME</Text>
            </View>

            {/* Saludo */}
            <Text style={{ fontSize: 18, color: '#FFF', marginLeft: 20, marginTop: 20 }}>
                Bienvenido, <Text style={{ fontWeight: 'bold' }}>Nombre del Usuario</Text>
            </Text>

            {/* Botón de Ver Cartelera */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 16 }}>Bienvenido al cine</Text>
                <Button 
                    type="ghost" 
                    style={{
                        backgroundColor: '#E50914', 
                        borderRadius: 10, 
                        width: 120, 
                        paddingVertical: 10, 
                        alignItems: 'center'
                    }} 
                    onPress={() => console.log('Cartelera')}
                >
                    Ver Cartelera
                </Button>
            </View>

            {/* Buscador */}
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <InputItem 
                    placeholder="Busca una película"
                    style={{
                        backgroundColor: '#333',
                        borderRadius: 12,
                        padding: 10,
                        color: '#FFF',
                        marginBottom: 20,
                    }}
                    placeholderTextColor="#AAA"
                />
            </View>

            {/* Carrusel automático */}
            <Carousel
                autoplay={true}
                infinite={true}
                dotStyle={{ backgroundColor: '#888' }}
                activeDotStyle={{ backgroundColor: '#E50914' }}
                style={{ height: 200 }}
            >
                {carouselData.map((image, index) => (
                    <View key={index}>
                        <Image source={image} style={{ width: '100%', height: 200 }} />
                    </View>
                ))}
            </Carousel>

            {/* Carrusel manual */}
            <Text style={{ color: '#FFF', fontSize: 16, marginLeft: 20, marginTop: 20 }}>Películas en cartelera</Text>
            <Carousel
                autoplay={false}
                infinite={true}
                dotStyle={{ backgroundColor: '#888' }}
                activeDotStyle={{ backgroundColor: '#E50914' }}
                style={{ height: 200 }}
                >
                {manualCarouselData.map((image, index) => (
                    <View key={index}>
                    <Image source={image} style={{ width: '100%', height: 200 }} />
                    </View>
                ))}
            </Carousel>


            {/* Botón para ver cartelera */}
            <Button
                type="primary"
                style={{
                    backgroundColor: '#E50914',
                    borderRadius: 10,
                    marginTop: 20,
                    marginHorizontal: 20,
                    paddingVertical: 15,
                    alignItems: 'center',
                }}
                onPress={() => console.log('Cartelera')}
            >
                Ver Cartelera
            </Button>

            {/* Promociones */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
                <Card 
                    style={{ width: '23%' }}
                    bodyStyle={{ padding: 10, backgroundColor: '#333' }}
                >
                    <Text style={{ color: '#FFF' }}>Promo 1</Text>
                </Card>
                <Card 
                    style={{ width: '23%' }}
                    bodyStyle={{ padding: 10, backgroundColor: '#333' }}
                >
                    <Text style={{ color: '#FFF' }}>Promo 2</Text>
                </Card>
                <Card 
                    style={{ width: '23%' }}
                    bodyStyle={{ padding: 10, backgroundColor: '#333' }}
                >
                    <Text style={{ color: '#FFF' }}>Promo 3</Text>
                </Card>
                <Card 
                    style={{ width: '23%' }}
                    bodyStyle={{ padding: 10, backgroundColor: '#333' }}
                >
                    <Text style={{ color: '#FFF' }}>Promo 4</Text>
                </Card>
            </View>

        </ScrollView>
    );
};

export default HomeScreen;
