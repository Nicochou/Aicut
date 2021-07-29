import axios from 'axios';
import api from '../../api/api';
const API_URL = 'https://api.twitch.tv/helix/clips?';

class ClipService {
  getTopTwitchClipByGameId() {
    return api.get(API_URL + 'game_id=' + '509658');
  }

}

export default new ClipService();
