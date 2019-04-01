/* import action type */
import {
  GET_COMIC,
  SET_RATING
} from '../constants/ActionTypes';

/* send api */
import comicApi from '../api/ComicApi';

var comicObj = new comicApi();
// send actions
export const getRandomComic = () => {
  return (distpatch) => {
    // clear actual comicApi
    distpatch({
      type: GET_COMIC,
      incommingComic: {}
    });
    distpatch({
      type: SET_RATING,
      rating: 0
    });

    // comic get object
    comicObj.getLatestComic().then((response) => {
      var numberMaxComic = response.data.num;
      // eplore max number
      return numberMaxComic;
    }).then((numberMaxComic) => {
      // get a random comic in a max number
      var numberComic = Math.floor(Math.random() * (numberMaxComic + 1));
      comicObj.getComic(numberComic).then((response) => {
        // send current commic
        distpatch({
          type: GET_COMIC,
          incommingComic: response.data
        })
      });
    })

  }
}

// set new stars
export const setRating = (newStars) => {
  // return
  return (distpatch) => {
    // set stars
    distpatch({
      type: SET_RATING,
      rating: newStars
    });
  }
}
