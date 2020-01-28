export const ADD_ITEM        = 'ADD_ITEM';
export const REMOVE_ITEM     = 'REMOVE_ITEM';
export const EDIT_ITEM_NAME  = 'EDIT_ITEM_NAME';
export const EDIT_ITEM_VALUE = 'EDIT_ITEM_VALUE';
export const LOGIN           = 'LOGIN';
export const REGISTER        = 'REGISTER';
export const LOGOUT          = 'LOGOUT';

export const addItem = (passId, passName, passValue) => ({
   type: ADD_ITEM,
   id: passId,
   passName,
   passValue
});

export const removeItem = id => ({
   type: REMOVE_ITEM,
   id
});

export const editItemName = (id, newValue) => ({
   type: EDIT_ITEM_NAME,
   id,
   newValue
});

export const editItemValue = (id, newValue) => ({
   type: EDIT_ITEM_VALUE,
   id,
   newValue
});

export const registerUser = (userName, password) => ({
   type: REGISTER,
   userName,
   password
});

export const login = (userName, password) => ({
   type: LOGIN,
   userName,
   password
});

export const logout = () => ({
   type: LOGOUT
});
