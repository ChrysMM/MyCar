import React from 'react';
import { Text, View, Button, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Fiat500 from "../assets/car_C25.jpg";

import Essence from "../assets/ESSENCE.png";
import boiteM from "../assets/manuel.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";

import axios from 'axios';

const URL = "http://localhost:8080/api/voiture"


export default function Detail() {
    const [get, setGet] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URL}).then( (response) => {
        setGet(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });
  }, []);
  
  if (!get) return null;
    
    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("Confirmation");
    }
    
    function navigateHistorique() {
        navigation.navigate("Historique");
    }
    
    function navigateProfil() {
        navigation.navigate("Profil");
    }

    function navigateLogo() {
        navigation.navigate("Search");
    }
    for (var i = 0; i< get.length ; i++) {
        console.log(get.length); 
        return(

        <View style={{alignItems: "center"}}>
          
        <Text  onPress= {()=>navigateLogo()}><Image  source={mycar} style={style.mycar} ></Image></Text>
      
       <View style={style.bloc}  >

       <View style={style.bloc}>

        <Text style={style.title} onPress= {()=>navigateSearch()} >{get[i].modele_id}</Text>
        <Text>Immatriculation : {get[i].immatriculation} </Text>
        <Text>{get[i].nbrePlace} places</Text>
        <Text>Boite {get[i].boite} </Text>
        <Text>Carburant : {get[i].carburant} </Text>
        <Text>Année : {get[i].annee} </Text>
        <Text>{get[i].statut_id} </Text>
        <Text>{get[i].marque_id} </Text>
        <Text>{get[i].categorie_id} </Text>
        </View>

         <View  style={{alignItems: "center"}} >
         <Text style={style.louer}  onPress= {()=>navigateToList()}>Confirmer</Text>
         </View>
         <Text style={style.bande1} onPress= {()=>navigateHistorique()}>
        <Image source={ historique }   style={style.logobande} ></Image>
        </Text>
        <Text style={style.bande2} onPress= {()=>navigateProfil()}>
        <Image source={ profil }  style={style.logobande}   ></Image>
        </Text>
        
     

        </View>

             </View>
        ); 
    }
}

const style = StyleSheet.create({
    bloc: {
        shadowOpacity: 0.5,
        shadowRadius: 11,
        elevation: 4, 
        fontSize: 22, 
        marginBottom: 3,  
        marginTop: 100, 
        backgroundColor: '#F5F5F5', 
        height: 155, 
        borderRadius: 10, 
        fontWeight: "bold", 
        width: 380, 
        borderWidth: 1, 
        textAlign: 'center', 
      
    }, 

 
    title: {
        fontSize: 22, 
        color: 'black',
        fontWeight: "bold", 
        textAlign: 'center', 
   
       
    }, 

    img_voiture: {
     
        width:100,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },

    logo: {
        width:25,
        height: 25,
        marginRight: 10, 
        marginLeft: 300, 
        marginTop: -65, 
        margin: 80, 
        
    }, 

      logobande: {
        width: 25,
        height: 25,
        marginRight: 200,
        marginLeft: 40, 
    }, 

    annee: {
        fontSize: 13,
        marginLeft: 332, 
        marginTop: -135, 
        fontWeight: "bold", 
    }, 
    bande1: {
        marginTop: 500,
        backgroundColor: '#A2273C', 
        height: 40, 
        width: 200, 
    }, 

   
    bande2: {
        marginTop: -28,
        marginLeft: 200, 
        backgroundColor: '#A2273C', 
        height: 40, 
        width: 200, 
    }, 

    mycar: {
        marginLeft: 300, 
        marginBottom: 40, 
        height: 60, 
        width: 60, 
    },

    louer: {
        backgroundColor: '#A2273C', 
        textAlign: "center", 
        width: 140, 
        height:  30, 
        borderRadius: 7,
        elevation: 3,
        marginTop: 250, 
        color: 'white', 
        fontWeight: "bold",
        paddingTop: 3, 
        paddingRight: 2,
        alignItems: "center", 

    }, 
   
})

