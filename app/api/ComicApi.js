// axios
import axios from 'axios';
/* class */
class Comic {
  /* call parent */
  constructor() {
  }

  /* fetch login */
  getComic(number) {
    //Success do it
    return axios.get(global.conf.apiServer + number);
  }

  /* fetch login */
  getLatestComic() {
    //Success do it
    return axios.get(global.conf.apiServer);
  }
}

/* export */
export default Comic;
