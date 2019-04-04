export default function favoritos(state= [], action){
    switch(action.type){
        case 'FAVORITOS':
            console.log('action FAVORITOS');
            return [action.produtos];

        default: return state;
    }
}