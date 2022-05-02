import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  Button
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SvgQRCode from 'react-native-qrcode-svg';
const Stack = createStackNavigator();
const text = "simples"
function Simple() {
    const data ={
        name: "Simple",
    }
    return <SvgQRCode size={200} value={JSON.stringify(data)} />;
  }
export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={require("./assets/me.jpeg")} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Natalia Cavalcante</Text>
            <Text style={styles.info}>Estudante</Text>
            <Text style={styles.cardTittle}>Email</Text>
            <Text style={styles.dataFont}> ncx.snf17@uea.edu.br </Text>
            <Text style={styles.cardTittle}>Matricula</Text>
            <Text style={styles.matricula}> 1715310021</Text>
          </View>
        </View>
        <View style={{ }}>
            <View
                style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 2
                }}>
                <Simple></Simple>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: "#2b6a41",
      height: 100
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom: 10,
      alignSelf: "center",
      position: "absolute",
      marginTop: 40
    },
    cardTittle: {
      color: "#030a06",
      fontSize: 25,
      marginBottom: 5,
      marginTop: 15
    },
    dataFont: {
      fontSize: 18,
      color: "#808080"
    },
    matricula: {
        fontSize: 18,
        color: "#808080"
      },
    card: {
      backgroundColor: "#9D9A99",
      borderRadius: 10,
      padding: 10,
      height: 100,
      marginTop: 10
    },
    name: {
      fontSize: 24,
      color: "#9D9A99",
      fontWeight: "600"
    },
    body: {
      marginTop: 40
    },
    bodyContent: {
    //   flex: 1,
      alignItems: "center",
      padding: 30
    },
    name: {
      fontSize: 32,
      color: "#696969",
      fontWeight: "600"
    },
    info: {
      fontSize: 16,
      color: "#2b6a41",
      marginTop: 10
    },
    description: {
      fontSize: 16,
      color: "#696969",
      marginTop: 10,
      textAlign: "center"
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#00BFFF"
    }
  });