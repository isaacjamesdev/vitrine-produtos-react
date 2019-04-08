import * as ActionCreator from '../store/action/ActionCreator';
import Axios from 'axios';
const hash = '2d744ffccd666aacf33f89b0eefeeb06'
const key = '52cd47ed61eebd8f62bdf9d8922a64f8'
const baseUrl= 'http://gateway.marvel.com/v1/public/'
const parameter= 'comics'
const url = `${baseUrl}${parameter}?ts=1&apikey=${key}&hash=${hash}`
Axios.create({
    baseURL:'http://gateway.marvel.com/v1/public/'
})


// my hasg = 2d744ffccd666aacf33f89b0eefeeb06
export default class PrateleiraApi{
    
    static listagem(){
        return dispatch => {
            fetch(url)
            .then(response => response.json())
            .then(data => {         
                dispatch(ActionCreator.listagem(data));
                return data;
            });
        // return dispatch => {
        }         
    }
    static cadastrar(produto, prateleira){
        return dispatch => 
            dispatch(ActionCreator.cadastrar(produto, prateleira)); 
    }
    static search(query){
        return dispatch => {
            if(query)
                dispatch(ActionCreator.search(query));
        }
    }

}