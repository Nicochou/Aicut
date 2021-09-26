import axios from 'axios';
import AuthService from "../auth.service";
import AuthHeader from '../auth-header';

const API_URL = 'http://localhost:8082/api/getEditClipByUserId';
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
            id: currentUser.id,
            status: STATUS_EDITION
        },
        headers: { 
          'x-access-token': accessToken['x-access-token']
        }
    })
    .then(response => {
        console.log(response)
        return response;
      })
    .catch(err=> {
        console.log(err)
    });
  }
}

export default new EditClipService();
