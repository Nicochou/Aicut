import axios from 'axios';
import AuthService from "../auth/auth.service";
import AuthHeader from '../auth/auth-header';
import {API_GETCLIP_ALL_PUB_BYUSERID} from '../../Const.js'

let accessToken = AuthHeader();

class EditClipService {
  getEditClipByUserId() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
        this.setState({ redirect: "/" });
    }

    return axios
    .get(API_GETCLIP_ALL_PUB_BYUSERID , {  
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
