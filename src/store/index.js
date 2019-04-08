import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


// my reducers
import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// configurações importadas:
const initialState = window.__PRELOADED_STATE__;
const store =  createStore(reducers, initialState, applyMiddleware(thunkMiddleware, ...middlewares));

sagaMiddleware.run(sagas);

export default store;