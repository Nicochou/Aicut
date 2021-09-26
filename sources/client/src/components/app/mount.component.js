import React, { Component } from "react";

import AuthService from "../../services/auth.service";
import api from '../../api/api';

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
                Qui anim magna cillum sint. Et fugiat velit ut id in non irure ea ex sunt aute. 
                Irure fugiat dolore ea commodo sunt exercitation officia do voluptate eu do velit magna.
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
                Qui anim magna cillum sint. Et fugiat velit ut id in non irure ea ex sunt aute. 
                Irure fugiat dolore ea commodo sunt exercitation officia do voluptate eu do velit magna.
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
                Qui anim magna cillum sint. Et fugiat velit ut id in non irure ea ex sunt aute. 
                Irure fugiat dolore ea commodo sunt exercitation officia do voluptate eu do velit magna.
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
            Velit reprehenderit dolor irure pariatur. Aliquip do occaecat non
            sint. Id ipsum sit reprehenderit amet. Ipsum mollit ut sint nostrud
            do aliquip. Laboris tempor do minim ullamco. Magna et laborum ut
            aliqua consectetur mollit ullamco aliqua laborum mollit duis.
            </p>
          </div>
        )}
        <div class="row" id="tuto-clip">
          <h4>Comment faire un montage ?</h4>
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
