import {createStore} from 'redux';

// my reducers
import reducers from './reducers';

const store = createStore(reducers);

export default store;