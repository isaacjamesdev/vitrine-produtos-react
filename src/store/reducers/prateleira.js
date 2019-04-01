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
        url:'https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=396488751',
        preco: 100,
        titulo: 'TV 45',
        descricao:'CALOPSITA'
    }    
]
export default function prateleira(state, action){
    switch(action.type){



        default: return state;
    }
}