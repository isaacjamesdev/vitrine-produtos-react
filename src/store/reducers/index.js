import {combineReducers} from 'redux';

import prateleira from './prateleira';
import favoritos from './favoritos';

export default combineReducers({
    prateleira, favoritos
})