import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";
const TWITCH_URL = "http://localhost:8082/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, passwordCheck) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      passwordCheck
    });
  }
  twitch() {
    window.location.href= TWITCH_URL + 'twitchAuth';
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
