import {USER} from 'actions/ActionTypes'


const initState = {
    user:[],
    pending: false,
    error: false,
};

const User = (state = initState, action) => {
    switch (action.type) {
        case USER + '_SUCCESS':
        return {
            ...state,
            user: action.payload && action.payload.id ? action.payload : null,
        }
    default:
        return state
            
    }
}

export default User