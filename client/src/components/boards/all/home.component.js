import React, { Component } from "react";
import UserService from "../services/user.service";
import {Link} from 'react-router-dom';


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
        console.log(response)
        this.setState({
          content: response.data.data,
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
    let { content, message } = this.state;
    let clips = Array.from(content);

    return (
      <div className="">
        <section id="appList">
        {clips.map(content => 
          <div class="card border-primary mb-3">
          <div class="card-header">{content.id_twitch}</div>
          <div class="card-body">
            <h4 class="card-title">{content.title}</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div class="card-body">
            <button className="btn btn-primary btn-block"><a href={content.url} target="blank_">Voir sur Twitch</a></button>
          </div>
          <div class="card-footer">
            <p>{content.createdAt}</p><p>{content.tags}</p>
          </div>
        </div>
        )}
        </section>
      </div>
    );
  }
}
