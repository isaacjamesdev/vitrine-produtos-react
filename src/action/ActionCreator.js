export function listagem(){
    return {type: 'LISTAGEM'}
}

export function cadastrar(produto){
    return {type: 'CADASTRAR_'+produto.categoria.toUpperCase(), produto}
}

export function search(titulo){
    return {type: 'SEARCH', titulo}
}