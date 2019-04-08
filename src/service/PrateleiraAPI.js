import * as ActionCreator from '../store/action/ActionCreator'

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
    static search(query){
        return dispatch => {
            if(query)
                dispatch(ActionCreator.search(query));
            else
                dispatch(ActionCreator.listagem('LISTAGEM'));
        }
    }
}