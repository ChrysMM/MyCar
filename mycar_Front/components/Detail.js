import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import Immatriculation from "../assets/immatriculation.png";
import Essence from "../assets/ESSENCE.png";
import boiteA from "../assets/manuel.png";
import Annee from "../assets/anne.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";

export default function Detail({ route, navigation }) {
  const { email, prenomUser, username, password } = route.params;

  function navigateLogo() {
    navigation.navigate("Search");
  }

  const {
    nbrePlace,
    marque,
    modele,
    boite,
    carburant,
    nomStatut,
    nomCategorie,
    annee,
    immatriculation,
    dateD,
    dateF,
  } = route.params;

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

      <Text style={style.louer} onPress={() => navigation.goBack()}>
        Retour
      </Text>

      <View style={style.bloc}>
        <Text style={style.title}>
          {JSON.parse(JSON.stringify(marque))}{" "}
          {JSON.parse(JSON.stringify(modele))}
        </Text>
        <Text>{JSON.parse(JSON.stringify(nomCategorie))}</Text>
        <Text>{JSON.parse(JSON.stringify(nomStatut))}</Text>
        <Text>
          <Image source={personne} style={style.logobande}></Image>
          {JSON.parse(JSON.stringify(nbrePlace))}
        </Text>
        <Text>
          <Image source={boiteA} style={style.logobande}></Image>
          {JSON.parse(JSON.stringify(boite))}
        </Text>
        <Text>
          <Image source={Essence} style={style.logobande}></Image>
          {JSON.parse(JSON.stringify(carburant))}
        </Text>
        <Text>
          <Image source={Annee} style={style.logobande}></Image>
          {JSON.parse(JSON.stringify(annee))}
        </Text>
        <Text>
          <Image source={Immatriculation} style={style.logobande}></Image>
          {JSON.parse(JSON.stringify(immatriculation))}
        </Text>
      </View>

      <Text
        style={style.louer}
        onPress={() => {
          navigation.navigate("Confirmation", {
            nbrePlace: nbrePlace,
            marque: marque,
            modele: modele,
            boite: boite,
            carburant: carburant,
            nomStatut: nomStatut,
            immatriculation: immatriculation,
            annee: annee,
            nomCategorie: nomCategorie,
            dateD: dateD,
            dateF: dateF,
            username: username,
            prenomUser: prenomUser,
            email: email,
          });
        }}
      >
        Confirmer
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    alignItems: "center",
  },

  bloc: {
    shadowOpacity: 0.5,
    shadowRadius: 11,
    elevation: 4,
    marginBottom: 3,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    // height: 240,
    height: 300,
    borderRadius: 10,
    // width: 380,
    width: 290,
    borderWidth: 1,
    alignItems: "center",
    resizeMode: "contain",
  },

  title: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    resizeMode: "contain",
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 22,
    textAlign: "left",
    resizeMode: "contain",
  },

  img_voiture: {
    width: 100,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    // resizeMode: "contain"
  },

  logobande: {
    width: 20,
    height: 20,
    marginRight: 225,
    marginLeft: 40,
    marginTop: 5,
    resizeMode: "contain",
  },

  mycar: {
    marginLeft: 300,
    marginBottom: 40,
    height: 60,
    width: 60,
    marginTop: 10,
    resizeMode: "contain",
  },

  louer: {
    backgroundColor: "#A2273C",
    textAlign: "center",
    width: 140,
    height: 25,
    borderRadius: 7,
    elevation: 3,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    paddingTop: 2,
    paddingRight: 2,
    alignItems: "center",
    // resizeMode: "contain"
  },
});
