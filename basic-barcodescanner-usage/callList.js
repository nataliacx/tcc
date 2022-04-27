/* global __DEV__ */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export default class CallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {
          id: 1,
          name: "Mark Doe",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "21:05:33",
          image:
            "https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg"
        },
        {
          id: 2,
          name: "Clark Man",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "21:05:33",
          image:
            "data:image/jpeg;base64,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"
        },
        {
          id: 3,
          name: "Jaden Boor",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "21:05:33",
          image:
            "https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"
        },
        {
          id: 4,
          name: "Srick Tree",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "20:05:33",
          image:
            "https://arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg"
        },
        {
          id: 5,
          name: "Erick Doe",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "21:15:33",
          image:
            "https://imagens.brasil.elpais.com/resizer/AXY-znKLjN2eo__LAuOLMJSSPFA=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6TE7TL7D4YWZFV2TFRSGNGN6JE.jpg"
        },
        {
          id: 6,
          name: "Francis Doe",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "19:05:33",
          image:
            "data:image/jpeg;base64,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"
        },
        {
          id: 8,
          name: "Matilde Doe",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "19:45:33",
          image:
            "data:image/jpeg;base64,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"
        },
        {
          id: 9,
          name: "John Doe",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "18:05:33",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY8mlKYZijHA-qgB2YXV6A_9R0mdKkLkhoQ&usqp=CAU"
        },
        {
          id: 10,
          name: "Fermod Doe",
          status: "active",
          presenceData: "16/02/2022",
          presenceHour: "21:05:33",
          image:
            "https://www.capila.com.br/wp-content/uploads/2019/12/quantos-fios-de-cabelo-tem-uma-pessoa-com-25-anos-29122019.jpg"
        }
      ]
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          {/* <Image source={{ uri: item.image }} style={styles.pic} />*/}
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
              <Text style={styles.mblTxt}>
                Check in: {item.presenceData} às {item.presenceHour}{" "}
              </Text>
              {/* <Text style={styles.msgTxt}>{item.status}</Text> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.titleTxt}> Trabalho de conclusão de curso II</Text>
          {/* <Text style={styles.smalltitleTxt}>
            Trabalho de conclusão de curso II
          </Text> */}
        </View>

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

        {/* <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate({name:'CallList',key:'list'})}
        >
          <Text style={styles.loginText}>Voltar ao menu principal</Text>
        </TouchableOpacity> */}
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
    padding: 12
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
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    width: 350,
    borderRadius: 30,
    backgroundColor: "transparent"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#2b6a41",
    // borderBottomWidth: 2,
    width:500 ,
    padding: 10
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280
  },
  nameTxt: {
    marginLeft: 2,
    fontWeight: "600",
    color: "#222",
    fontSize: 16,
    width: 170
  },
  titleTxt: {
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 60,
    fontWeight: "600",
    fontSize: 16,
    width: 500,
    color: "#fff"
  },
  smalltitleTxt: {
    marginBottom: 2,
    marginTop: 5,
    fontSize: 14,
    width: 300,
    color: "#fff"
  },
  mblTxt: {
    fontWeight: "300",
    color: "#777",
    fontSize: 13,
    marginLeft: 1
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15
  }
});
