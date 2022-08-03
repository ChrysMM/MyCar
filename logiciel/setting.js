const {axios}= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosVoiture = () => {
        axios.get('http://localhost:8080/api/voiture')
            .then(response => {
                const voiture = response.data.data;
                console.log("connexion test", voiture);
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosVoiture();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }


