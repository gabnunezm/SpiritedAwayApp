import React from 'react';
import { View, Text, Image, Button, Linking, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
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
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
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
    marginBottom: 4
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%'
  }
});