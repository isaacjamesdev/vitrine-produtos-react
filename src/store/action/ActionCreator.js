export function listagem(){
    return {type: 'LISTAGEM'}
}

export function cadastrar(produto){
    return {type: 'CADASTRAR_'+produto.categoria.toUpperCase(), produto}
}

export function search(query){
    return {type: 'SEARCH', query}
}


export function listagemRequest(){
    return {type: 'LISTAGEM_REQUEST'}
}

export function listagemSuccess(){
    return {type: 'LISTAGEM_SUCCESS'}
}