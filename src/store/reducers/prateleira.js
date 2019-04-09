const INITIAL_STATE = {
  produtos: [],
  favoritos: [],
  comprados:[],
  promocoes:[],
  busca: []
};

const filtrarPrateleira = (prateleira, produto)=> {
    if(prateleira.findIndex(aux => aux.id === produto.id ) < 0)
        return [...prateleira, produto]
    else
        return prateleira.filter(aux => aux.id !== produto.id)
}

export default function prateleira(state= INITIAL_STATE, action){
    switch(action.type){
        case 'LISTAGEM':
            return {...state, produtos: [...action.payload.data.results]}; 
            
        case 'CADASTRAR_COMPRADOS':
            return {...state, comprados: filtrarPrateleira(state.comprados, action.payload.produto) };

        case 'CADASTRAR_FAVORITOS':
            return {...state, favoritos:filtrarPrateleira(state.favoritos, action.payload.produto)};
            
        case 'CADASTRAR_PROMOCOES':
            return {...state, promocoes: filtrarPrateleira(state.promocoes, action.payload.produto)};
            
        case 'SEARCH':
            return {...state, busca: state.produtos.filter(produto => produto.title.toLowerCase().indexOf(action.payload.query.toLowerCase()) !== -1)};
        
        default: return state;
    }
}