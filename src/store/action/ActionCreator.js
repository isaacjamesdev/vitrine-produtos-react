
export function cadastrar(produto, prateleira){
    return {type: 'CADASTRAR_'+prateleira.toUpperCase(), payload: {produto: produto}}
}

export function busca(query){
    return {type: 'SEARCH', payload: {query: query}}
}


export function listagem(data){    
    return {type: 'LISTAGEM', payload: data}
}
