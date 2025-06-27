import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default function ContactScreen() {
  return (
    <ImageBackground
      source={require('../assets/img/bg_spiritedaway2.png')} // Imagen de fondo que tú elijas
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Información de Contacto</Text>

        <Image
          source={require('../assets/img/foto.jpeg')}
          style={styles.image}
        />

        <Text style={styles.name}>Gabriel Nuñez Medina</Text>
        <Text style={styles.email}>20231871@itla.edu.do</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Ver mi GitHub"
            onPress={() => Linking.openURL('https://github.com/gabnunezm')}
            color="#1f1f1f"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4
  },
  email: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%'
  }
});