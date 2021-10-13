import React, { Component } from "react";

import AuthService from "../../services/auth/auth.service";
import api from '../../api/twitch';

export default class Mount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      isLive: null,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });

    const result = api.get(`https://api.twitch.tv/helix/streams?user_id=${currentUser.id_twitch}`)
    result.then(
      response => {
        if(response.data.data.length === 0){
          this.setState({ currentUser: currentUser, userReady: true, isLive: "false" })
        }
        else{
          this.setState({ currentUser: currentUser, userReady: true, isLive: "true" })
        }
      }).catch(
      error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.isLive === "true" ? (
          <div className="row" id="streamOn">
            <h3>MOUNT</h3>
            <br /><br />
            <div class="col-sm">
              <h5>Ajouter une intro</h5>
              {/* A modifier pour explication d'upload d'intro */}
              <p>
                selectionné une video dans vos document afin qu'elle sois utilisé en tant qu'intro du best-of.
              </p>
              {/* A modifier pour upload vers bdd */}
              <iframe width="300" height="200" src="https://www.youtube.com/embed/watch?v=M2FSuCezaXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* A modifier pour formulaire submit */}
              <button className="btn btn-secondary btn-block">
                Modifier
              </button>
            </div>
            <div class="col-sm">
              <h5>Ajouter une outro</h5>
              {/* A modifier pour explication d'upload d'outro */}
              <p>
              selectionné une video dans vos document afin qu'elle sois utilisé en tant qu'outro du best-of.
              </p>
              {/* A modifier pour upload vers bdd */}
              <iframe width="300" height="200" src="https://www.youtube.com/embed/watch?v=ntorJi-36ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* A modifier pour formulaire submit */}
              <button className="btn btn-secondary btn-block">
                Modifier
              </button>
            </div>
            <div class="col-sm">
              <h5>Ajouter une transition</h5>
              {/* A modifier pour explication d'upload de transition */}
              <p>
                selectionné une video dans vos document afin qu'elle sois utilisé en tant que transition entre chaque clip sélectionné du best-of.
              </p>
              {/* A modifier pour upload vers bdd */}
              <iframe width="300" height="200" src="https://www.youtube.com/embed/watch?v=GsZkdqt92NE&list=PLqt9Y2cXfjfhHOKKJ6LpC2x1EkXXPEH17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
              {/* A modifier pour formulaire submit */}
              <button className="btn btn-secondary btn-block">
                Modifier
              </button>
            </div>
          </div>
        ) : (
          <div class="row" id="streamOff">
            <h3 class="col-sm">Veuillez lancer votre live stream</h3>
            {/* A modifier pour explication de lancer stream avant création clip */}
            <p class="col-sm">
            Veuillez lancer votre stream afin de pouvoir demarrer la création de clip automatique.
            </p>
          </div>
        )}
        <div class="row center" id="tuto-clip">
          <h4>Comment faire un montage ?</h4>
           {/* A modifier pour explication de création d'un clip */}
          <p class="col-sm">
          Tout d'abord vous devez lancer votre stream ensuite sur cette même page vous pourrez ajouter une intro, une transition et une outro ensuite vous pourrez sélectionné vos clip dans l'odre et cliquez sur le boutons monter ce qui vous créeras votre un best-of automatiquement que vous pourrez telecharger sur votre appareil.
          </p>
          {/* Source de la vidéo à modifier */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ak0sC_NpkKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
          </div>  
      </div>
    );
  }
}
