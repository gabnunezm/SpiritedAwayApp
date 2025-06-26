import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import MomentsScreen from '../screens/MomentsScreen';
import AboutScreen from '../screens/AboutScreen';
import InMyLifeScreen from '../screens/InMyLifeScreen';
import ContactScreen from '../screens/ContactScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Personajes':
              iconName = 'people';
              break;
            case 'Momentos':
              iconName = 'film';
              break;
            case 'Acerca':
              iconName = 'information-circle';
              break;
            case 'EnMiVida':
              iconName = 'videocam';
              break;
            case 'Contacto':
              iconName = 'mail';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Personajes" component={CharactersScreen} />
      <Tab.Screen name="Momentos" component={MomentsScreen} />
      <Tab.Screen name="Acerca" component={AboutScreen} />
      <Tab.Screen name="EnMiVida" component={InMyLifeScreen} />
      <Tab.Screen name="Contacto" component={ContactScreen} />
    </Tab.Navigator>
  );
}