import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text>{character.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 300, borderRadius: 12, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});