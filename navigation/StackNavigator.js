import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import CharacterDetailScreen from '../screens/CharactersDetailScreen';
import MomentDetailScreen from '../screens/MomentDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={{ title: 'Detalle del Personaje' }} />
      <Stack.Screen name="MomentDetail" component={MomentDetailScreen} options={{ title: 'Detalle del Momento' }} />
    </Stack.Navigator>
  );
}