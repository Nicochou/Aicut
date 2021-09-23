import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import queryString from 'query-string';

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
    let params = queryString.parse(this.props.location.search)
    console.log(params);
    if(params) {
        params['roles'] = params['roles'].split(',');
        localStorage.setItem("user", JSON.stringify(params));
        this.setState({ redirect: "/profile" });
    }
    else{
        this.setState({ redirect: "/login" });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
        <div className="container">

        </div>
      );
  }
}
