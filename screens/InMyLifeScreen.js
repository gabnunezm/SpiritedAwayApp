import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function InMyLifeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal | En Mi Vida</Text>
      <Text style={styles.text}>
        Esta película marcó bastante la forma en que me fijo en los detalles, estilos y demás dentro de un filme animado.
      </Text>
      <Text style={styles.text}>Aquí comparto un video hablando más al respecto:</Text>
      <View style={styles.video}>
        <WebView
          javaScriptEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/bWlYggSKCPM' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 },
  video: { flex: 1, height: Dimensions.get('window').height / 2 },
});