import React from 'react';
import {View } from 'react-native';
import AppNavigator from './routes/appNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/drawerNavigator';



export default function App() {
  return (
      <NavigationContainer>
      <DrawerNavigator />
      </NavigationContainer>
  );
}

