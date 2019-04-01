/* inital state */
var initialState = {
  actualComic: {},
  rating: {
    max: 5,
    actual: 3
  }
}

/* get actions types */
import {
  GET_COMIC,
  SET_RATING
} from '../constants/ActionTypes'


/* reducer */
const comicReducer = (state = initialState, action) => {
  // select type to modify
  switch (action.type) {
    case GET_COMIC:
      return {
        ...state,
        actualComic: action.incommingComic
      };
      break;
    case SET_RATING:
      return {
        ...state,
        rating: {
          ...state.rating,
          actual: action.rating
        }
      };
      break;
    default:
      return state;

  }
}

/* export comic reducer */
export default comicReducer;
