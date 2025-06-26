import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const characters = [
  {
    id: '1',
    name: 'Chihiro Ogino',
    description: 'Chihiro es una niña de 10 años que se está mudando a una nueva ciudad cuando su familia encuentra la entrada al mundo de los espíritus. Durante su aventura, pasa de ser una niña llorona, egocéntrica y pesimista a una joven trabajadora, responsable y optimista que ha aprendido a preocuparse por los demás.',
    image: 'https://substackcdn.com/image/fetch/$s_!kEVH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba403542-1f39-4e3c-bbdc-93210ae983fb_1140x797.jpeg'
  },
  {
    id: '2',
    name: 'Haku',
    description: 'Un joven que ayuda a Chihiro después de que sus padres se hayan transformado en cerdos. Ayuda a protegerla del peligro y le da consejos.',
    image: 'https://i.namu.wiki/i/f17AlzH_duAX9XaAcCsYwD4rq3WqSPW5Cobg5l9ibIpNta8uiRYXhjIMY1tj5w7lk2DQ5vJfIdyjju64IK1r-w.webp'
  },
  {
    id: '3',
    name: 'Sin Cara',
    description: 'Sin Cara es un ser solitario que parece sustentarse en las emociones de aquellos con los que se cruza, sobre todo en la recepción emocional de sus dones.',
    image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/30d62d9b-925c-40cb-816d-533e6bdea7f3/hayao-miyazaki-reveals-the-true-identity-of-no-face-in-spirited-away.jpg'
  }
];

export default function CharactersScreen() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { character: item })} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
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
