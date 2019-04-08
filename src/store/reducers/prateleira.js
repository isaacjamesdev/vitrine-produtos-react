const INITIAL_STATE = {
  produtos: [],
  favoritos: [],
  comprados:[],
  promocoes:[]
};


export default function prateleira(state= INITIAL_STATE, action){

    switch(action.type){
        case 'LISTAGEM':
            console.log(action.payload.data.results);
            
            return {
                produtos: [...action.payload.data.results],
                comprados: state.comprados,
                favoritos: state.favoritos,
                promocoes: state.promocoes
            };

        case 'CADASTRAR_COMPRADOS':
            return {
                comprados: [state.comprados, action.produto],
                favoritos: state.favoritos,
                promocoes: state.promocoes
            };

        case 'CADASTRAR_FAVORITOS':
            return {
                comprados: state.comprados,
                favoritos:[...state.favoritos, action.produto],
                promocoes: state.promocoes};

        case 'CADASTRAR_PROMOCOES':
            return {
                comprados: state.comprados,
                favoritos:state.favoritos,
                promocoes: [...state.promocoes, action.produto]
            };

        case 'SEARCH':
            return {
                comprados: state.comprados.filter(produto => produto.titulo.toLowerCase().indexOf(action.query.toLowerCase()) !== -1),
                favoritos: state.favoritos.filter(produto => produto.titulo.toLowerCase().indexOf(action.query.toLowerCase()) !== -1),
                promocoes: state.promocoes.filter(produto => produto.titulo.toLowerCase().indexOf(action.query.toLowerCase()) !== -1)
            };
        
        default: return state;
    }
}