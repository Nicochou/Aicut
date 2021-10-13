import React, { Component } from "react";

import UserService from "../../services/user.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      message: ""
    };
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: JSON.stringify(response.data.data),
          message: JSON.stringify(response.data.message)
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div class="alert alert-dismissible alert-success">
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          <strong>Well done!</strong> {this.state.message}.
        </div>
        {this.state.content}
      </div>
    );
  }
}
