/* global __DEV__ */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default class RegisterSubjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }


  render() {
    return (
        <>
    <ScrollView style={{
       backgroundColor: "#DCDCDC", 
    }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Nome da disciplina"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Nome do professor(a)"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email do professor(a)"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Código da disciplina"
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
      </View>
      <View style={{
          marginLeft:50,
      }}>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Salvar</Text>
        </TouchableOpacity>
        </View>
        <View style={{
          marginLeft:50,
      }}>
        </View>
      </ScrollView>
      
      </>
    );
  }
}

const resizeMode = "center";

const styles = StyleSheet.create({
    buttonContainer: {
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 40,
        marginLeft: 80,
        width: 500,
        borderRadius: 30,
        backgroundColor: "transparent"
      },
      loginButton: {
        backgroundColor: "#2b6a41",
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 9
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 19
      },
      loginText: {
        color: "white",
        fontSize:16,
      },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    height: 500
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 400,
    height: 65,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 55,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent"
  },
  btnByRegister: {
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: 300,
    backgroundColor: "transparent"
  },
  loginButton: {
    backgroundColor: "#2b6a41",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  loginText: {
    color: "white"
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  textByRegister: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
    textShadowRadius: 10
  }
});
