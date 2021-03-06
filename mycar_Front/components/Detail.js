import React from 'react';
import { Text, View, Button, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import immatriculation from "../assets/immatriculation.png";
import Essence from "../assets/ESSENCE.png";
import boiteA from "../assets/manuel.png";
import historique from "../assets/HISTORIQUE.png";
import annee from "../assets/anne.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";

import axios from 'axios';

const URLvoiture = "http://localhost:8080/api/voiture";
const URLmodele= "http://localhost:8080/api/modele";
const URLcategorie= "http://localhost:8080/api/categorie";
const URLmarque= "http://localhost:8080/api/marque";

export default function Detail() {
    const [voiture, setVoiture] = React.useState(null);
    const [modele, setModele] = React.useState(null);
    const [categorie, setCategorie] = React.useState(null);
    const [marque, setMarque] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URLvoiture}).then( (response) => {
        setVoiture(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

    axios({method:'get', url:URLmodele}).then( (response) => {
        setModele(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

    axios({method:'get', url:URLcategorie}).then( (response) => {
        setCategorie(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

    axios({method:'get', url:URLmarque}).then( (response) => {
        setMarque(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

  }, []);
  
  if (!voiture) return null;
  if (!modele) return null;
  if (!categorie) return null;
  if (!marque) return null;
    
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
    for (var i = 0; i< voiture.length ; i++) {
        for (var i = 0; i< modele.length ; i++) {
            for (var i = 0; i< categorie.length ; i++) {
                for (var i = 0; i< marque.length ; i++) {
        console.log(voiture.length); 
        return(

        <View style={{alignItems: "center"}}>
          
        <Text  onPress= {()=>navigateLogo()}><Image  source={mycar} style={style.mycar} ></Image></Text>
        <Text  style={style.title} onPress= {()=> navigateHistorique()}  ><Image source={ historique }   style={style.logobande} ></Image></Text>
        <Text style={style.title} onPress= {()=> navigateProfil()}><Image source={ profil }   style={style.logobande} ></Image></Text>
       <View style={style.bloc}  >

       <View style={style.bloc}>

        <Text style={style.title} onPress= {()=>navigateSearch()} > {marque[i].nomMarque} {modele[i].nomModele}</Text>

        <Text  style={style.text}>{categorie[i].nomCategorie}</Text>
        <Text  style={style.text}><Image source={ immatriculation }   style={style.logobande} ></Image> {voiture[i].immatriculation} </Text>
        <Text></Text>
        <Text style={style.text}><Image source={ personne }   style={style.logobande} ></Image>{voiture[i].nbrePlace}</Text>
        <Text  style={style.text}><Image source={ boiteA }   style={style.logobande} ></Image>{voiture[i].boite} </Text>
        <Text  style={style.text}><Image source={ Essence }   style={style.logobande} ></Image> {voiture[i].carburant} </Text>
        <Text  style={style.text}><Image source={ annee }   style={style.logobande} ></Image> {voiture[i].annee} </Text>
        


        </View>

         <View  style={{alignItems: "center"}} >
         <Text style={style.louer}  onPress= {()=>navigateToList()}>Confirmer</Text>
         </View>
        </View>

             </View>
        ); 
    }
}
        }
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
        height: 220, 
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
    title: {
        fontSize: 22, 
        color: 'black',
        fontWeight: "bold", 
        textAlign: 'center', 
   
       
    }, 
    text : {
        fontSize: 14, 
        fontWeight: "bold", 
        marginLeft: 22, 
        textAlign: "left", 
      
    
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

