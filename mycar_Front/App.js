import React, { Component, component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profil from "./components/Profil";
import Filtre from "./components/Filtre";
import Search from "./components/Search";
import Calendrier from "./components/Calendrier";
import Confirmation from "./components/Confirmation";
import Connexion from "./components/Connexion";
import date from "./components/date";
import Detail from "./components/Detail";
import Historique from "./components/Historique";
import Oublie from "./components/Oublie";
import Valider from "./components/Valider";
import Camera from "./components/Camera";
import axios from "axios";

//(adresse ip ordi)  sue wifi connexion tel
//const URL = "http://172.20.10.4:8080/api/auth/signin"
const URL = "http://localhost:8080/api/auth/signin";

const AppStack = createStackNavigator();

export default function Navigator() {
  axios({
    method: "post",
    url: URL,
    data: { username: "Legrant", password: "234mlkj" },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen name="Connexion" component={Connexion} />
        <AppStack.Screen name="Oublie" component={Oublie} />
        <AppStack.Screen name="date" component={date} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Search" component={Search} />
        <AppStack.Screen name="Filtre" component={Filtre} />
        <AppStack.Screen name="Valider" component={Valider} />
        <AppStack.Screen name="Profil" component={Profil} />
        <AppStack.Screen name="Calendrier" component={Calendrier} />
        <AppStack.Screen name="Confirmation" component={Confirmation} />
        <AppStack.Screen name="Historique" component={Historique} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

// }
// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
