import axios from 'axios';

const KEY = 'AIzaSyAX0h9eYS_VrypLunPAEHdXpDutoiRb5DU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
