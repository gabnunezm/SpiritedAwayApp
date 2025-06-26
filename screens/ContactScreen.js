import React from 'react';
import { View, Text, Linking, Button, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <Text style={styles.text}>¿Tienes preguntas o comentarios?</Text>
      <Button title="Enviar correo" onPress={() => Linking.openURL('mailto:gabriel@email.com')} />
      <Button title="Ver mi GitHub" onPress={() => Linking.openURL('https://github.com/tuusuario')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 },
});