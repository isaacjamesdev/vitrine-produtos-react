const INITIAL_STATE = {
  produtos: [],
  favoritos: [],
  comprados:[],
  promocoes:[],
  busca: []
};


export default function prateleira(state= INITIAL_STATE, action){
    switch(action.type){
        case 'LISTAGEM':
            return {...state, produtos: [...action.payload.data.results]};
            
        case 'CADASTRAR_COMPRADOS':
            return {...state, comprados: [...state.comprados, action.payload.produto]};
        
        case 'CADASTRAR_FAVORITOS':
            return {...state, favoritos:[...state.favoritos, action.payload.produto]};
            
        case 'CADASTRAR_PROMOCOES':
            return {...state, promocoes: [...state.promocoes, action.payload.produto]};
            
        case 'SEARCH':
            return {...state, busca: state.produtos.filter(produto => produto.title.toLowerCase().indexOf(action.payload.query.toLowerCase()) !== -1)};
        
        default: return state;
    }
}