import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import profil from "../assets/PROFIL.png";
import mycar from "../assets/My_Car.png";

export default function Valider({ route, navigation }) {
  const { dateD, dateF, username, email, prenomUser } = route.params;

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  }

  function navigateSearch() {
    navigation.navigate("Detail");
  }

  function navigateLogo() {
    navigation.navigate("Search");
  }

  return (
    <View style={style.view}>
      <Text onPress={() => navigateLogo()}>
        <Image source={mycar} style={style.mycar}></Image>
      </Text>
      <Text
        style={style.title}
        onPress={() => {
          navigation.navigate("Profil", {
            username: username,
            prenomUser: prenomUser,
            email: email,
          });
        }}
      >
        <Image source={profil} style={style.logobande}></Image>
      </Text>

      <Text style={style.reserve}>
        Vous avez réservé votre voiture du{" "}
        {formatDate(JSON.parse(JSON.stringify(dateD)))} au{" "}
        {formatDate(JSON.parse(JSON.stringify(dateF)))}.{" "}
      </Text>

      <Text style={style.reserve}>A bientôt !</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  img_voiture: {
    width: 100,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
  },

  logo: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 300,
    marginTop: -65,
    margin: 80,
  },

  logobande: {
    width: 25,
    height: 25,
    marginRight: 100,
    marginLeft: 40,
    resizeMode: "contain",
  },

  mycar: {
    marginLeft: 300,
    marginBottom: 40,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },

  reserve: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 100,
  },

  title: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
