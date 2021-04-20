import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Services
import AuthService from "./services/auth.service";

// Components

// - Boards
import BoardUser from "./components/boards/board-user.component";
import BoardModerator from "./components/boards/board-moderator.component";
import BoardAdmin from "./components/boards/board-admin.component";
import BoardStreamer from "./components/boards/board-streamer.component";
// - Api
import GameStreams from './components/api/GameStreams/GameStreams';
import TopStreams from './components/api/TopStreams/TopStreams';
import Header from './components/api/Header/Header';
import Resultats from './components/api/Resultats/Resultats'
import Erreur from './components/api/Erreur/Erreur';
import Live from './components/api/Live/Live';
import Games from './components/api/Games/Games';
import Clips from './components/api/Clips/Clips';
// - Commun
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Twitch from './components/twitch.component';
import Launch from "./components/launch.component";
// - App
import Cut from './components/app/cut.component';
import Edit from "./components/app/edit.component";
import Mount from "./components/app/mount.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      showStreamerBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showStreamerBoard: user.roles.includes("ROLE_STREAMER"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, showStreamerBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            AICUT
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showStreamerBoard && (
              <li className="nav-item">
                <Link to={"/stre"} className="nav-link">
                  Streamer Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User Board
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              {showStreamerBoard && (
              <li className="nav-item">
                <Link to={"/cut"} className="nav-link bg-primary">
                  Cut
                </Link>
              </li>
              )}
              {showStreamerBoard && (
              <li className="nav-item">
                <Link to={"/edit"} className="nav-link bg-primary">
                  Edit
                </Link>
              </li>
              )}
              {showStreamerBoard && (
              <li className="nav-item">
                <Link to={"/mount"} className="nav-link bg-primary">
                  Mount
                </Link>
              </li>
              )}
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                  <img src={currentUser.profile_image_url} alt="Avatar" id="ProfilePic"/>
                </Link>
              </li>
              
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <Header />
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Launch} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/game" component={Games} />
            <Route exact path="/clip" component={Clips} />
            <Route exact path="/game/:slug" component={GameStreams} />
            <Route exact path="/top-streams" component={TopStreams} />
            <Route exact path="/resultats/:slug" component={Resultats} />
            <Route exact path="/resultats/" component={Erreur} />
            <Route exact path="/live/:slug" component={Live} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/twitch" component={Twitch} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/cut" component={Cut} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/mount" component={Mount} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/stre" component={BoardStreamer} />
          </Switch>
        </div>
      <footer id="footer" className="inverted">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>PROJECT</h4>
                <ul className="list text-light">
                  <li>Latest Release</li>
                  <li>Updates</li>
                  <li>License</li>
                  <li>News</li>
                  <li>Links</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>SUPPORT</h4>
                <ul className="list text-light">
                  <li>Troubleshooting</li>
                  <li>Common Questions</li>
                  <li>Report a Bug</li>
                  <li>Get Help</li>
                  <li>FAQS</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>COMPANY</h4>
                <ul className="list text-light">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Home</li>
                  <li>Blog</li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>INFO</h4>
                <ul className="list text-light">
                  <li>Get Directions</li>
                  <li>Call Us</li>
                  <li>Our Staff</li>
                  <li>Working Hours</li>
                  <li>Offices</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="widget clearfix widget-newsletter">
                <h4 className="widget-title"><i className="fa fa-envelope"></i> Sign Up For a Newsletter</h4>
                <p>Weekly breaking news, analysis and cutting edge advices on job searching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="social-icons social-icons">
                <ul>
                  <li className="social-rss"><i className="fa fa-rss"></i></li>
                  <li className="social-facebook"><i className="fab fa-facebook-f"></i></li>
                  <li className="social-twitter"><i className="fab fa-twitter"></i></li>
                  <li className="social-vimeo"><i className="fab fa-vimeo"></i></li>
                  <li className="social-youtube"><i className="fab fa-youtube"></i></li>
                  <li className="social-pinterest"><i className="fab fa-pinterest"></i></li>
                  <li className="social-gplus"><i className="fab fa-google-plus-g"></i></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-light">
              <div className="copyright-text">© 2019 POLO HTML5 Template. All Rights Reserved. </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    );
  }
}

export default App;
