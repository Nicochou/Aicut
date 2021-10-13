import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TextArea from "react-validation/build/textarea";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      isStreamer: false,
      message: "",
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });

    if (currentUser.isStreamer == 1) this.setState({ isStreamer: true });

    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;
    const isStreamer = this.state.isStreamer;

    console.log(currentUser)

    return (
      <div className="container">
        {this.state.userReady ? (
          <div>
           <Form
                onSubmit={this.handleProfileUpdate}
                ref={(c) => {
                  this.form = c;
                }}
              >
                {currentUser.roles.map((role, index) => (
                <span class="badge badge-pill bg-secondary">{role}</span>
              ))}
                <div className="row">
                <div className="col-sm">
                <img
                    src={currentUser.profile_image_url}
                    alt="image profile"
                    className="img-thumbnail"
                  ></img>
                <div className="form-group">
                  <label htmlFor="image-profile">Pick image profile</label>
                  <Input
                    type="file"
                    className="form-control"
                    name="image-profile"
                  />
                </div>
                </div>
                <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={currentUser.username}
                    onChange={this.onChangeUsername}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="mail"
                    className="form-control"
                    name="email"
                    value={currentUser.email}
                    onChange={this.onChangeEmail}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Description</label>
                  <TextArea
                    type="text"
                    className="form-control"
                    name="password"
                    value={currentUser.description}
                    onChange={this.onChangeDescription}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="token">Token Twitch</label>
                  <Input
                    disabled="disabled"
                    type="text"
                    className="form-control"
                    name="TwitchToken"
                    value={currentUser.accessTokenTwitch}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="token">Token JWT</label>
                  <Input
                    disabled="disabled"
                    type="text"
                    className="form-control"
                    name="JWTToken"
                    value={currentUser.accessTokenJWT}
                  />
                </div>

               
                </div>
                </div>
                
                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    <span>Modifier mon profile</span>
                  </button>
                </div>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
              </Form>
          </div>
        ) : null}
      </div>
    );
  }
}
