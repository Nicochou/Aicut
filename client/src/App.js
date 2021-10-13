import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { FaHome, FaHeadset, FaUserAlt, FaUserMd, FaUserTie, FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLogin, AiOutlinePlusCircle, AiOutlineLogout } from "react-icons/ai";
import { FcClapperboard, FcFilmReel, FcFilm } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import "./assets/css/Theme.css";
import "./assets/css/Plugin.css";
// Languages
import i18next from './config/i18nextConf';
import { withTranslation } from 'react-i18next';

// Services - Auth
import AuthService from "./services/auth/auth.service";
// Components - Boards
import BoardUser from "./components/boards/board-user.component";
import BoardModerator from "./components/boards/board-moderator.component";
import BoardAdmin from "./components/boards/board-admin.component";
import BoardStreamer from "./components/boards/board-streamer.component";
// Components - trends
import GameStreams from './components/trends/GameStreams/GameStreams';
import TopStreams from './components/trends/TopStreams/TopStreams';
import Header from './components/trends/Header/Header';
import Resultats from './components/trends/Resultats/Resultats'
import Erreur from './components/trends/Erreur/Erreur';
import Live from './components/trends/Live/Live';
import Games from './components/trends/Games/Games';
import Clips from './components/trends/Clips/Clips';
// Components - Commun
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Twitch from './components/twitch.component';
import Launch from "./components/launch.component";
// Components - App
import Cut from './components/app/cut.component';
import Edit from "./components/app/edit.component";
import Mount from "./components/app/mount.component";
// Components - Page - Blog
import Blog from "./components/pages/blog/blog.component";
// Components - Page - Discover
import Aboutus from "./components/pages/discover/aboutus.component";
import Prices from "./components/pages/discover/prices.component";
// Components - Page - Support
import Contact from "./components/pages/support/contact.component";
import Faq from "./components/pages/support/faq.component";
import Bogue from "./components/pages/support/bogue.component";
// Components - Page - Projet
import News from "./components/pages/project/news.component";
import Release from "./components/pages/project/release.component";
import Licences from "./components/pages/project/licences.component";
import swal from 'sweetalert';
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

  modal() {
    swal("Hello world!");
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, showStreamerBoard } = this.state;
    const { t } = this.props;
    const changeLanguage = (lng) => {
      i18next.changeLanguage(lng);
    }
    return (
      <div>
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                  <FaHome />{this.props.t('home_menu')}
              </Link>
            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  <FaUserMd />{this.props.t('moderator_menu')}
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  <FaUserTie />{this.props.t('admin_menu')}
                </Link>
              </li>
            )}
            {showStreamerBoard && (
              <li className="nav-item">
                <Link to={"/stre"} className="nav-link">
                  <FaHeadset />{this.props.t('streamer_menu')}
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  <FaUserAlt />{this.props.t('user_menu')}
                </Link>
              </li>
            )}
        </ul>
        <a class="navbar-brand mx-auto" href="/" onClick={this.modal}><img src={'./logoGPE.png'} />AICUT
        {currentUser && (
          <div id="appRoute">
          {showStreamerBoard && (
                <li className="nav-item">
                  <Link to={"/cut"} className="nav-link">
                    <FcClapperboard />
                  </Link>
                </li>
              )}
          {showStreamerBoard && (
            <li className="nav-item">
              <Link to={"/edit"} className="nav-link">
                <FcFilmReel />
              </Link>
            </li>
            )}
          {showStreamerBoard && (
            <li className="nav-item">
              <Link to={"/mount"} className="nav-link">
                <FcFilm />
              </Link>
            </li>
          )}
        </div>
         )}
        </a>
        <ul class="navbar-nav ml-auto">
            <li className="dropdown"><Link className="nav-link">{this.props.t('discover_menu')}</Link>
              <ul className="dropdown-menu">
                <li className="nav-link text-dark"><Link to={"/aboutus"}>{this.props.t('aboutus_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/prices"}>{this.props.t('price_menu')}</Link></li>
              </ul>
            </li>
            <li className="ml-auto">
                <Link to={"/blog"} className="nav-link">
                  {this.props.t('blog_menu')}
                </Link>
            </li>
            <li className="ml-auto dropdown"><Link className="nav-link">{this.props.t('support_menu')}</Link>
              <ul class="dropdown-menu">
                <li className="nav-link text-dark"><Link to={"/contact"} >{this.props.t('contact_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/faq"} >{this.props.t('faq_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/bogue"} >{this.props.t('bug_menu')}</Link></li>
              </ul>
            </li>
            <li className="ml-auto dropdown"><Link className="nav-link">{this.props.t('project_menu')}</Link>
              <ul class="dropdown-menu">
                <li className="nav-link text-dark"><Link to={"/release"} >{this.props.t('features_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/news"} >{this.props.t('news_menu')}</Link></li>
                <li className="nav-link text-dark"><Link to={"/licences"} >{this.props.t('licenses_menu')}</Link></li>
              </ul>
            </li>
          </ul>
        {currentUser ? (
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  <div>
                    <img src={currentUser.profile_image_url} alt="Avatar" id="ProfilePic" align="center" />
                  </div>
                  
                </Link>
            </li>
            <li className="nav-item ml-auto">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  <AiOutlineLogout />
                </a>
            </li>
          </ul>
        ):(
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                <AiOutlineLogin />
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              <AiOutlinePlusCircle />
            </Link>
          </li>
          <li className="nav-item">
                  <div class="p-dropdown">
                      <a className="nav-link" href="#"><FaGlobeAmericas /><span>FR</span></a>
                      <ul class="p-dropdown-content">
                          <li><a href="" onClick={() => changeLanguage('fr')}>Français</a></li>
                          <li><a href="" onClick={() => changeLanguage('en')}>English</a></li>
                          <li><a href="" onClick={() => changeLanguage('sp')}>Español</a></li>
                          <li><a href="" onClick={() => changeLanguage('pt')}>português</a></li>
                          <li><a href="" onClick={() => changeLanguage('ru')}>Pусский</a></li>
                          <li><a href="" onClick={() => changeLanguage('ar')}>عربي</a></li>
                          <li><a href="" onClick={() => changeLanguage('ch')}>中国人</a></li>
                          <li><a href="" onClick={() => changeLanguage('cr')}>한국인</a></li>
                          <li><a href="" onClick={() => changeLanguage('jp')}>日本</a></li>
                      </ul>
                  </div>
              </li>
        </ul>
        )}
      </nav>
        <Header />
        <div className="">
          <Switch>
            <Route exact path="/" component={Launch} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/bogue" component={Bogue} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/prices" component={Prices} />
            <Route exact path="/release" component={Release} />
            <Route exact path="/news" component={News} />
            <Route exact path="/licences" component={Licences} />
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
                <h4>DECOUVRIR</h4>
                <ul className="list text-light">
                  <li>Nous-concernant</li>
                  <li>Prix</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>BLOG</h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>PROJET</h4>
                <ul className="list text-light">
                  <li>Ajout récent</li>
                  <li>News</li>
                  <li>Licences</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="widget">
                <h4>SUPPORT</h4>
                <ul className="list text-light">
                  <li>Contact</li>
                  <li>Faq</li>
                  <li>Bogue</li>
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
    </footer>
    </div>
    );
  }
}

export default withTranslation()(App);
