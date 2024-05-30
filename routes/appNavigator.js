import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/homeScreen"


const Stack = createStackNavigator();

export default function AppNavigator(){
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
  );
};


