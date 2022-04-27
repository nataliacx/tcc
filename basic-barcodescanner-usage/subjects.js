/* global __DEV__ */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,Button
} from "react-native";

export default class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {
          id: 1,
          name: "Trabalho de conclusão de curso",
          professorName: "Jucimar JR",
          status: "active"
        },
        {
          id: 2,
          name: "Empreendedorismo II",
          professorName: "Jucimar JR",
          status: "active"
        },
        {
          id: 3,
          name: "Estágio 1",
          professorName: "Jucimar JR",
          status: "active"
        }
      ]
    };
  }

  renderItem = ({ item }) => {
    return (
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.mblTxt}>Professor: {item.professorName}</Text>
              <Text style={styles.mblTxt}>|  Horario: 18:00 - 21:20</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate({name:'CallList',key:'list'})}
                      >
              <Text style={{
                fontSize:16,
                marginTop:22,
              }}>Ver lista de presenca</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  };

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <FlatList
            extraData={this.state}
            data={this.state.calls}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={this.renderItem}
          />
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this.props.navigation.navigate({name:'registerSubjects',key:"regSub"})} >
          <Text style={styles.loginText}>Adicionar disciplina</Text>
        </TouchableOpacity>
        
      </>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10
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
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 27,
    width: 350,
    borderRadius: 30,
    backgroundColor: "transparent"
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#2b6a41",
    // borderBottomWidth: 2,
    padding: 5
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 30
  },
  nameTxt: {
    marginLeft: 5,
    fontWeight: "700",
    color: "#222",
    fontSize: 14,
    width: 700,
    height: 30
  },
  titleTxt: {
    marginBottom: 5,
    marginTop: 1,
    marginLeft:70,
    fontWeight: "700",
    fontSize: 18,
    width: 180,
    color: "#fff",
  },
  smalltitleTxt: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 14,
    width: 200,
    color: "#fff"
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
    marginTop:5,
    marginLeft: 5
  },
  msgContainer: {
    flexDirection: "row",
    marginLeft: 1,
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  }
});
