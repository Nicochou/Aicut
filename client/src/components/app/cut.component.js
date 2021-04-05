import React, { Component } from "react";

import AuthService from "../../services/auth.service";
import api from '../../api/api';

export default class Cut extends Component {
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
        {(this.state.isLive === "true") ?
        <header className="jumbotron">
          <h3>CUT</h3>
        </header>
        : 
        <header className="jumbotron">
          <h3>Veuillez lancer votre stream</h3>
        </header>}
      </div>
    );
  }
}
