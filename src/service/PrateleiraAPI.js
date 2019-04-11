import * as ActionCreator from '../store/action/ActionCreator';
const hash = '2d744ffccd666aacf33f89b0eefeeb06'
const key = '52cd47ed61eebd8f62bdf9d8922a64f8'
const baseUrl = 'http://gateway.marvel.com/v1/public/'
const parameter = 'comics'
const limit = "20"
const url = `${baseUrl}${parameter}?limit=${limit}&ts=1&apikey=${key}&hash=${hash}`

export default class PrateleiraApi{
    static listagem(){
        return dispatch => {
            fetch(url)
            .then(response => response.json())
            .then(data => {         
                dispatch(ActionCreator.listagem(data));
                return data;
            });
        }         
    }
    
    static remover(produto, prateleira){
        return dispatch => 
            dispatch(ActionCreator.remover(produto, prateleira)); 
    }

    static cadastrar(produto, prateleira){
        return dispatch => 
            dispatch(ActionCreator.cadastrar(produto, prateleira)); 
    }
    static busca(query){
        return dispatch => {
            if(query)
                dispatch(ActionCreator.busca(query));
        }
    }

}