const INITIAL_STATE = [
    {
        id:1,
        url:'https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=396488751',
        preco: 15,
        titulo: 'TV 32',
        descricao:'SAMSUNG'
    },
    {
        id:2,
        url:'https://i.ytimg.com/vi/bgDbH-Qh6t8/maxresdefault.jpg',
        preco: 100,
        titulo: 'Calopsita',
        descricao:'CALOPSITA'
    }    
]
export default function prateleira(state= INITIAL_STATE, action){
    switch(action.type){
        case 'LISTAGEM':
            return [];
              
        default: return state;
    }
}