export function listagem(){
    console.log('reducer listagem');
    return {type: 'LISTAGEM'}
}

export function favoritos(produtos){
    return {type: 'FAVORITOS', produtos: produtos}
}

export function cadastrar(produto){
    return {type: 'cadastrar_'+produto.categoria, produto}
}