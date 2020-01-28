import { combineReducers } from 'redux';
import {usersReducer, itemsReducer} from './reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
   usersReducer,
   itemsReducer,
   form: formReducer
})