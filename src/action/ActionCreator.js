export function listagem(produtos){
    return {type: 'LISTAGEM', payload:{produtos: produtos}}
}