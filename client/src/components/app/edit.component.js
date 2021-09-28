import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import editService from "../../services/app/edit.service";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      clips: { clip: "" },
    };
  }

  componentDidMount() {
    let clipsUser = editService.getEditClipByUserId();
    if (!clipsUser) this.setState({ redirect: "/mount" });
    
    clipsUser
      .then((clipsuser) => {
        this.setState({
          userReady: true,
          clips: clipsuser.data.data.clips,
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
    const clipsEdit = this.state.clips;
    var clips = Object.values(clipsEdit);
 

    console.log('clip :',clips);
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
      
          
          </tbody>
        </table>
      </div>
    );
  }
}
