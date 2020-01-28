import {ADD_ITEM, REMOVE_ITEM, EDIT_ITEM_NAME, EDIT_ITEM_VALUE, REGISTER, LOGOUT, LOGIN} from "./actions";

const itemsReducerInitialState = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const usersReducerInitialState = {loggedIn: false};

const itemsStorageName = 'items';
const userStorageName = 'user';

export const itemsReducer = (state = itemsReducerInitialState, action) => {
   switch (action.type) {
      case ADD_ITEM: {
         const newState = [
            ...state,
            {
               id: action.id,
               passName: action.passName,
               passValue: action.passValue
            }
         ];
         localStorage.setItem(itemsStorageName, JSON.stringify(newState));
         return newState;
      }
      case REMOVE_ITEM: {
         const newState = state.filter(item => item.id !== action.id);
         localStorage.setItem(itemsStorageName, JSON.stringify(newState));
         return newState;
      }
      case EDIT_ITEM_NAME: {
         const newState = state.map(item => {
            return item.id === action.id ? { ...item, passName: action.newValue} : item
         });
         localStorage.setItem(itemsStorageName, JSON.stringify(newState));
         return newState;
      }
      case EDIT_ITEM_VALUE: {
         const newState = state.map(item => {
               return item.id === action.id ? { ...item, passValue: action.newValue} : item
         });
         localStorage.setItem(itemsStorageName, JSON.stringify(newState));
         return newState;
      }
      default:
         return state
   }
};

export const usersReducer = (state = usersReducerInitialState, action) => {
   switch (action.type) {
      case LOGIN:
         const user = JSON.parse(localStorage.getItem(userStorageName));
         const loggedIn = action.userName === user.userName && action.password === user.password;
         return {
            ...state, loggedIn: loggedIn
         };
      case LOGOUT:
         return {
            ...state, loggedIn: false
         };
      case REGISTER:
         const item = {
            userName: action.userName,
            password: action.password
         };
         localStorage.setItem(userStorageName, JSON.stringify(item));
         return {
            ...state, user: item
         };
      default:
         return state
   }
};
