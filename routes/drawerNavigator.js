import React from 'react'
import AboutScreen from "../screens/aboutScreen "
import ContactScreen from "../screens/contactScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './appNavigator'
import tw from 'tailwind-react-native-classnames';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: tw `bg-red-500 `,
      headerTitle:"Welcom To Chat",
      headerTitleAlign: 'center',
      headerTitleStyle: tw `text-sm text-white items-center text-center`,

    }}
    >
      <Drawer.Screen name="Home" component={AppNavigator} />
      <Drawer.Screen name="ABOUT" component={AboutScreen} />
      <Drawer.Screen name="CONTACT US" component={ContactScreen} />
    </Drawer.Navigator>

  );
}

