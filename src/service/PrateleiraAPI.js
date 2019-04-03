import * as ActionCreator from '../action/ActionCreator';
const promocao = {
    id: Math.random(),
    url:'https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/07/Promo%C3%A7%C3%A3o-%C3%A9-a-alma-do-neg%C3%B3cio.png',
    preco: 25,
    titulo: 'PROMOCAO',
    descricao:'PROMOCAO'
}
const comprados = {
    id: Math.random(),
    url:'http://prosperatecnologia.com.br/blog/wp-content/uploads/2018/04/registrar-compras-650x350.jpg',
    preco: 100,
    titulo: 'COMPRADOS',
    descricao:'COMRPADOS'
}
const favoritos = {
    id: Math.random(),
    url:'https://1.bp.blogspot.com/-VdH3GaedFDQ/WllWwPjhcNI/AAAAAAAAFIw/Pzv83YH77UYK_tIxTNRSlXjhRjTG_OQSwCLcBGAs/s1600/Favoritos.jpg',
    preco: 15,
    titulo: 'FAVORITO',
    descricao:'FAVORITO'
} 

export default class PrateleiraApi{
    static listagem(nome){
        return dispatch => {
            console.log('veio ate api');
            let produtos;
            switch (nome) {
                case 'promocao': 
                    produtos = promocao;
                break;
                case 'comprados':
                    produtos = comprados;
                break; 
                case 'favoritos':
                    produtos = favoritos;
                break;
             
                default:
                    produtos = Error('nome prateleira invalido')
            }
            console.log('veio ate api');
                dispatch(ActionCreator.listagem(produtos));
        }         
    }
    static favoritos (){
        return dispatch => {
                dispatch(ActionCreator.favoritos([]))    
        }
    }
    static cadastrar (produto){
        return dispatch => {
                dispatch(ActionCreator.cadastrar(produto))    
        }
    }
}