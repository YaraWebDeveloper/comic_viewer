/* deoendencies */
import { combineReducers } from 'redux';
import session from './session/SessionReducer';
import {routerReducer} from 'react-router-redux'

/* apps reducer */
import comic from './comicReducer';
/* const */
const main = combineReducers({session, comic});
const _allReducer = combineReducers({routerReducer, main});

/* export default */
export default _allReducer;
