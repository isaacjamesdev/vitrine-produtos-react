export default function prateleira(state= [], action){
    switch(action.type){
        case 'LISTAGEM':
            console.log('action LISTAGEM');
            return [action.produtos];
        case 'CADASTRAR':
            return [...state, action.produto];
        default: return state;
    }
}