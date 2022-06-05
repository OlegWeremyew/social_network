import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './AppReducer';
import { authReducer } from './authReducer';
import { chatReducer } from './chatReducer';
import { messagesReducer } from './messagesReducer';
import { newsReducer } from './NewsReducer';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  chat: chatReducer,
  news: newsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
