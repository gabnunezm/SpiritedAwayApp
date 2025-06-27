import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/img/SpiritedAway_poster.jpg'),
  require('../assets/img/chihiro.jpg'),
  require('../assets/img/haku_chihiro.jpg'),
  require('../assets/img/hakudragon.jpg'),
  require('../assets/img/bano.jpg'),
  require('../assets/img/Chihiro_angry.jpg'),
  require('../assets/img/sujeto_sotano.jpg'),
  require('../assets/img/spirited-away-witch.jpg'),
];

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/img/bg_spiritedaway.jpg')} // Puedes cambiar esta imagen de fondo
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Spirited Away</Text>
        <Text style={styles.description}>
          Bienvenido a esta app dedicada a la obra maestra de Studio Ghibli: *El Viaje de Chihiro* (Spirited Away). 
          Explora sus personajes, escenas inolvidables, y el impacto personal que ha dejado.
        </Text>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>

        <Text style={styles.trailerTitle}>Tráiler Oficial</Text>
        <View style={styles.videoContainer}>
          <WebView
            javaScriptEnabled
            domStorageEnabled
            style={styles.video}
            source={{ uri: 'https://www.youtube.com/embed/ByXuk9QqQkk' }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#f0f0f0'
  },
  slider: {
    height: 200,
    marginBottom: 20
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    marginRight: 10
  },
  trailerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff'
  },
  videoContainer: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden'
  },
  video: {
    flex: 1
  }
});