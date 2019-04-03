export function listagem(produtos){
    console.log('reducer listagem');
    
    return {type: 'LISTAGEM', produtos: produtos}
}

export function favoritos(produtos){
    return {type: 'FAVORITOS', produtos: produtos}
}

export function cadastrar(produto){
    return {type: 'CADASTRAR', produto}
}