import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const moments = [
    {
    id: '1',
    title: 'El Balneario de los Espíritus',
    description: 'Lin guía a Chihiro dentro del Balneario.',
    youtubeId: 'W5szC4XgR1s',
    image: 'https://i.ytimg.com/vi/W5szC4XgR1s/maxresdefault.jpg'
  },
  {
    id: '2',
    title: 'El Gran Dragón Blanco',
    description: 'Haku en su forma de dragón huye de los pajaros de papel',
    youtubeId: 'ilr6q0xFKxU',
    image: 'https://i.ytimg.com/vi/ilr6q0xFKxU/maxresdefault.jpg'
  },
  {
    id: '3',
    title: 'Haku Ayuda a Chihiro',
    description: 'Haku Ayuda a Chihiro a encontrar su camino en el Balneario tras quedarse atrapada en el mundo de los espíritus.',
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