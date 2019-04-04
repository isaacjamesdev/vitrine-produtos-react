import * as ActionCreator from '../action/ActionCreator';

export default class PrateleiraApi{
    static listagem(nome){
        return dispatch => {
            dispatch(ActionCreator.listagem());
        }         
    }
    static cadastrar(produto){
        return dispatch => 
            dispatch(ActionCreator.cadastrar(produto)); 
    }
    static search(titulo){
        return dispatch => {
            if(titulo)
                dispatch(ActionCreator.search(titulo));
            else
                dispatch(ActionCreator.listagem('LISTAGEM'));
        }
    }
}