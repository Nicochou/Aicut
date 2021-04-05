import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <img src={currentUser.profile_image_url} alt="image profile" className="img-thumbnail"></img>
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>view count:</strong>{" "}
          {currentUser.views_count}
        </p>
        <p>
          <strong>Type:</strong>{" "}
          {currentUser.type}
        </p>
        <p>
          <strong>Boradcaster type:</strong>{" "}
          {currentUser.Broadcaster_type}
        </p>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <p>
          <strong>Description:</strong>{" "}
          {currentUser.description}
        </p>
        <p>
          <strong>isStreamer:</strong>{" "}
          {currentUser.isStreamer}
        </p>
      </div>: null}
      </div>
    );
  }
}
