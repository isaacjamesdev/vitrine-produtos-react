

export function cadastrar(produto){
    return {type: 'CADASTRAR_'+produto.categoria.toUpperCase(), produto}
}

export function search(query){
    return {type: 'SEARCH', payload: query}
}


export function listagem(data){    
    return {type: 'LISTAGEM', payload: data}
}
