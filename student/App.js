import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button
} from "react-native";
import MainPage from "./MainPage"
import ProfilePage from "./Profile"

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Bem vindo" component={MainPage} />
     <Stack.Screen name="Perfil" component={ProfilePage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}