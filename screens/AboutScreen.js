import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function AboutScreen() {
  return (
    <ImageBackground
      source={require('../assets/img/fondo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>El Viaje de Chihiro (Spirited Away)</Text>

        <Text style={styles.sectionTitle}>🎬 Sinopsis</Text>
        <Text style={styles.text}>
          *El Viaje de Chihiro* es una película animada japonesa de fantasía dirigida por Hayao Miyazaki y producida por Studio Ghibli. La historia sigue a Chihiro, una niña de 10 años que se ve atrapada en un mundo espiritual mientras intenta rescatar a sus padres transformados en cerdos. Enfrentando pruebas mágicas y desafíos personales, Chihiro se embarca en un viaje de crecimiento, identidad y valentía.
        </Text>

        <Text style={styles.sectionTitle}>🎥 Director</Text>
        <Text style={styles.text}>Hayao Miyazaki</Text>

        <Text style={styles.sectionTitle}>👥 Cast Principal (Voces en Japonés)</Text>
        <Text style={styles.text}>
          - Rumi Hiiragi como Chihiro Ogino{'\n'}
          - Miyu Irino como Haku{'\n'}
          - Mari Natsuki como Yubaba / Zeniba{'\n'}
          - Bunta Sugawara como Kamaji{'\n'}
          - Yumi Tamai como Lin
        </Text>

        <Text style={styles.sectionTitle}>📅 Fecha de Lanzamiento</Text>
        <Text style={styles.text}>20 de julio de 2001 (Japón)</Text>

        <Text style={styles.sectionTitle}>🏆 Premios</Text>
        <Text style={styles.text}>
          - Óscar a Mejor Película Animada (2003){'\n'}
          - Oso de Oro en Berlín (2002){'\n'}
          - 35 premios internacionales y más de 19 nominaciones destacadas
        </Text>

        <Text style={styles.sectionTitle}>⭐ Calificaciones</Text>
        <Text style={styles.text}>
          - IMDb: ★ 8.6/10{'\n'}
          - Rotten Tomatoes: 🍅 97% (Tomatometer), 96% (Audiencia)
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#eee',
    lineHeight: 22,
  },
});