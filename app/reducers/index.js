import { combineReducers } from 'redux';
import * as itemsReducer from './items';

export default combineReducers(Object.assign(
	itemsReducer,
))