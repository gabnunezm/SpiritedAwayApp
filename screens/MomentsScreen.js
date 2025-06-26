import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const moments = [
    {
    id: '1',
    title: 'El Tren',
    description: 'El emotivo viaje en tren con Sin Cara.',
    youtubeId: 'UpGVidzYD54',
    image: 'https://i.ytimg.com/vi/UpGVidzYD54/maxresdefault.jpg'
  },
  {
    id: '2',
    title: 'El Verdadero Nombre',
    description: 'Chihiro recuerda el nombre verdadero de Haku.',
    youtubeId: 'ilr6q0xFKxU',
    image: 'https://i.ytimg.com/vi/ilr6q0xFKxU/maxresdefault.jpg'
  },
  {
    id: '3',
    title: 'La despedida',
    description: 'El conmovedor adiós entre Haku y Chihiro.',
    youtubeId: '70NhEBzLKU8',
    image: 'https://i.ytimg.com/vi/70NhEBzLKU8/maxresdefault.jpg'
  }
];

export default function MomentsScreen() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={moments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MomentDetail', { moment: item })} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
});