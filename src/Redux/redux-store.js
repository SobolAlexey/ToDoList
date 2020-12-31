import messagesReducer from './Reducers/messages-reducer.js';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import profileReducer from './Reducers/profile-reducer.js';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    form: formReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;