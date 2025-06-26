import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function InMyLifeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>En Mi Vida</Text>
      <Text style={styles.text}>
        Esta película marcó mi infancia. Me enseñó a enfrentar mis miedos, ser valiente y valorar la bondad. Me identifico con Chihiro y su evolución a lo largo de la historia.
      </Text>
      <Text style={styles.text}>Aquí te comparto un video hablando más al respecto:</Text>
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