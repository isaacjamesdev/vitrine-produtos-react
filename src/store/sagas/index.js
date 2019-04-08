import {all, takeLatest} from 'redux-saga/effects';

import {listagem} from './listagem';

export default function* rootSaga(){
    yield all([
        takeLatest('LISTAGEM_REQUEST', listagem)
    ]);
}