import React, { Component } from "react";

import UserService from "../services/user.service";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      message: ""
    };
   
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: JSON.stringify(response.data.data),
          message: JSON.stringify(response.data.message)
        });
      },
      error => {
        this.setState({
          message:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
    
  }

  render() {
    const { content, message } = this.state;
    return (

      <div className="container">
        <div class="alert alert-dismissible alert-success">
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          <strong>Well done!</strong> {message}.
        </div>
        {content}
      </div>
    );
  }
}
