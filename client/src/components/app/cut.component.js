import React, { Component } from "react";

import AuthService from "../../services/auth.service";
import CutService from "../../services/app/cut.service";
import api from "../../api/api";

export default class Cut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      isLive: null,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/" });

    const result = api.get(
      `https://api.twitch.tv/helix/streams?user_id=${currentUser.id_twitch}`
    );
    result
      .then((response) => {
        if (response.data.data.length === 0) {
          this.setState({
            currentUser: currentUser,
            userReady: true,
            isLive: "false",
          });
        } else {
          this.setState({
            currentUser: currentUser,
            userReady: true,
            isLive: "true",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
          {this.state.isLive === "true" ? (
          <div className="row" id="streamOn">
            <h3>CUT</h3>
            <br /><br />
            <div class="col-sm">
              <h5>Creer un clip manuellement</h5>
              {/* A modifier pour explication de lancer la création clip manuel */}
              <p>
                Qui anim magna cillum sint. Et fugiat velit ut id in non irure ea ex sunt aute. 
                Irure fugiat dolore ea commodo sunt exercitation officia do voluptate eu do velit magna.
              </p>
              <button
                onClick={CutService.createClip}activateML
                className="btn btn-primary btn-block"
              >
                Create Clips
              </button>
            </div>
            <div class="col-sm">
              <h5>Activer le script automatique</h5>
              {/* A modifier pour explication de lancer la création clip en automatique */}
              <p>
                Qui anim magna cillum sint. Et fugiat velit ut id in non irure ea ex sunt aute. 
                Irure fugiat dolore ea commodo sunt exercitation officia do voluptate eu do velit magna.
              </p>
              <button onClick={CutService.activateML}
                className="btn btn-secondary btn-block">
                Activate
              </button>
            </div>
          </div>
        ) : (
          <div class="row" id="streamOff">
            <h3 class="col-sm">Veuillez lancer votre live stream</h3>
            {/* A modifier pour explication de lancer stream avant création clip */}
            <p class="col-sm">
            Velit reprehenderit dolor irure pariatur. Aliquip do occaecat non
            sint. Id ipsum sit reprehenderit amet. Ipsum mollit ut sint nostrud
            do aliquip. Laboris tempor do minim ullamco. Magna et laborum ut
            aliqua consectetur mollit ullamco aliqua laborum mollit duis.
            </p>
          </div>
        )}
        <div class="row" id="tuto-clip">
          <h4>Comment créer un clip ?</h4>
           {/* A modifier pour explication de création d'un clip */}
          <p class="col-sm">
            Velit reprehenderit dolor irure pariatur. Aliquip do occaecat non
            sint. Id ipsum sit reprehenderit amet. Ipsum mollit ut sint nostrud
            do aliquip. Laboris tempor do minim ullamco. Magna et laborum ut
            aliqua consectetur mollit ullamco aliqua laborum mollit duis.
          </p>
          {/* A modifier pour explication de création d'un clip */}
          <p class="col-sm">
            Velit reprehenderit dolor irure pariatur. Aliquip do occaecat non
            sint. Id ipsum sit reprehenderit amet. Ipsum mollit ut sint nostrud
            do aliquip. Laboris tempor do minim ullamco. Magna et laborum ut
            aliqua consectetur mollit ullamco aliqua laborum mollit duis.
          </p>
          {/* Source de la vidéo à modifier */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ak0sC_NpkKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
          </div>  
      </div>
    );
  }
}
