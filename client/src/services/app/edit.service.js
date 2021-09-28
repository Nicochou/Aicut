import axios from 'axios';
import AuthService from "../auth.service";
import AuthHeader from '../auth-header';

const API_URL = 'http://localhost:8082/api/getAllPublishedClip';
const STATUS_EDITION = 101;

let accessToken = AuthHeader();

class EditClipService {
  getEditClipByUserId() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
        this.setState({ redirect: "/" });
    }

    return axios
    .get(API_URL , {  
        params: {
            id: currentUser.id
        },
        headers: { 
          'x-access-token': accessToken['x-access-token']
        }
    })
    .then(response => {
        return response;
      })
    .catch(err=> {
    });
  }
}

export default new EditClipService();
