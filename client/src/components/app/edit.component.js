import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import editService from "../../services/app/edit.service";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      clips: { clip: "" },
    };
  }

  componentDidMount() {
    let clipsUser = editService.getEditClipByUserId();
    if (!clipsUser) this.setState({ redirect: "/mount" });
    
    clipsUser
      .then((clipsuser) => {
        this.setState({
          currentUser: clipsuser.data.clips[0],
          userReady: true,
          clips: clipsuser.data.clips[0].clips,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const currentUser = this.state.currentUser;
    const clipsEdit = this.state.clips;
    const clips = Array.from(clipsEdit);

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>EDIT </h3>
        </header>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Id</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
          {clips.map((clips) => (
            <tr>
            <th scope="row">{clips.status}</th>
            <td>{clips.id_twitch.substring(0,10)}...{clips.id_twitch.substring(clips.id_twitch.length - 10)}</td>
            <td>{clips.createdAt}</td>
            <td><a target="_blank" href={clips.url}>Edit</a></td>
          </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
