import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spirited Away</Text>
      <Text style={styles.description}>
        Bienvenido a esta app dedicada a la obra maestra de Studio Ghibli: *El Viaje de Chihiro* (Spirited Away). 
        Explora sus personajes, escenas inolvidables, y el impacto personal que ha dejado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 24 },
});