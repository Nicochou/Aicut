import axios from 'axios';
import config from "../config/config.json";

// On charge les configs
let client_id = config.CLIENT_ID;
let client_secret = config.CLIENT_SECRET;
let client_credentials = "client_credentials" ;
let access_app_token = null;

// Si on a pas de session token pour l'application
if(!localStorage.getItem('appToken')){
    // On va chercher le App token via Twitch
    axios
    .post(config.TWITCH_APP_URL_TOKEN, {
        client_id : client_id,
        client_secret : client_secret,
        grant_type : client_credentials
    })
    .then(response => {
      // Si on une réponse on enregistre en session notre app Token  
      if (response.data) {
        localStorage.setItem("appToken", JSON.stringify(response.data));
      }
    })
    .catch(error => {
        console.error(error.message);
      });
}
// Si on a une session
else{
    // On charche notre variable depuis notre session
    let appToken = JSON.parse(localStorage.getItem('appToken'));
    access_app_token = appToken.access_token
}

// On creer les headers pour les requetes communes
let api = axios.create({
    headers: {
        "Client-ID": client_id,
        "Authorization": "Bearer " + access_app_token
    }
})

export default api;
