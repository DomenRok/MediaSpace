import auth from "./auth";
import { combineReducers } from 'redux';
import movies from './movies';

const mediaSpace = combineReducers({
    movies, auth
});

export default mediaSpace;