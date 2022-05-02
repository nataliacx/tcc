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
import * as WebBrowser from 'expo-web-browser';
const Stack = createStackNavigator();


export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        myInteger: 0,
        token:" "
    }
}
getRandomInteger() {
    const randomInt = Math.floor(Math.random()*100);

    this.setState({
      myInteger: randomInt
    });
    console.log(this.state.myInteger)
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  fetchUser = async ()=> {
      console.log("Fetching user...")
        await WebBrowser.openBrowserAsync('http://192.168.0.118:3000/login');
        //generate token here
        const token ="W29iamVjdCBPYmplY3RddW5kZWZpbmVk"
        this.setState({
            token
          });
        
      }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageUea}
          source={{
            uri:
              "https://seeklogo.com/images/U/uea-universidade-federal-do-amazonas-logo-155FF37132-seeklogo.com.png"
          }}
        />
        <TouchableHighlight style={styles.buttonContainer}>
          <Text style={{ fontSize: 16, textAlign: "center", fontWeight:"800" }}>
            Bem vindo(a) ao sistema de carteirinha digital da UEA!
          </Text>
        </TouchableHighlight>
        {console.log("token value ::", this.state.token)}
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
        onPress={this.state.token === " " ? this.fetchUser : () =>this.props.navigation.navigate('Perfil') }
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() =>
            alert(
              "Entre em contato com o PAE da sua unidade para realizar cadastro no sistema a3"
            )
          }
        >
          <Text style={{ fontWeight: "600"}}>Não possui cadastro?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    padding: 100
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 15, 
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 50,
    height: 30,
    flex: 0,
    marginLeft: 15,
    justifyContent: "center"
  },
  imageUea: {
    width: 220,
    height: 200,
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 1
  },
  buttonContainer: {
    marginTop: 20,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#2b6a41"
  },
  loginText: {
    color: "white",
    fontSize:16, 
    textAlign: "center",
    fontWeight:"600"
  },
  fontTitle: {
    fontSize: 10,
    width: 30
  }
});
