import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MomentDetailScreen({ route }) {
  const { moment } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: moment.image }} style={styles.image} />
      <Text style={styles.title}>{moment.title}</Text>
      <Text style={styles.description}>{moment.description}</Text>
      <WebView
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${moment.youtubeId}` }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 200 },
  title: { fontSize: 24, fontWeight: 'bold', padding: 12 },
  description: { fontSize: 16, paddingHorizontal: 12, paddingBottom: 8 },
});