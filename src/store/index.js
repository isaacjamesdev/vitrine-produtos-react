import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


import reducers from './reducers';

// configurações importadas:
const initialState = window.__PRELOADED_STATE__;
const store =  createStore(reducers, initialState, applyMiddleware(thunkMiddleware));


export default store;

