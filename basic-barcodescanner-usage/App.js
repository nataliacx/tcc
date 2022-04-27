import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from './scanner'
import Subjects from './subjects'
import Menu from './menu'
import RegisterSubjects from './registerSubject'
import CallList from './callList'
import {
  Button
} from "react-native";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu"  component={Menu} />
      <Stack.Screen name="Scanner" key="scan" component={Scanner} options={({ navigation }) => ({
    title: 'Leitor de QRCode',
    headerLeft: () => (
    <Button  title= {'Voltar'} onPress={()=> navigation.goBack()} />
    ),
    gestureEnabled:false,
  })} />
      <Stack.Screen name="Disciplinas" component={Subjects} options={({ navigation }) => ({
    title: 'Minhas disciplinas',
    headerLeft: () => (
    <Button  title= {'Voltar'} onPress={()=> navigation.goBack()} />
    ),
    gestureEnabled:false,
  })} />
  <Stack.Screen name="registerSubjects"  key="regSub" component={RegisterSubjects} options={({ navigation }) => ({
    title: 'Cadastrar disciplina',
    headerLeft: () => (
    <Button  title= {'Voltar'} onPress={()=> navigation.goBack()} />
    ),
    gestureEnabled:false,
  })} />
  <Stack.Screen name="CallList"  key="list" component={CallList} options={({ navigation }) => ({
    title: 'Lista de chamada',
    headerLeft: () => (
    <Button  title= {'Voltar'} onPress={()=> navigation.goBack()} />
    ),
    gestureEnabled:false,
  })} />
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