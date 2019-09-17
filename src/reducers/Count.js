import {GET_COUNT} from 'actions/ActionTypes'


const initState = {
    count: [],
    pending: false,
    error: false,
};

const Count = (state = initState, action) => {
    switch (action.type) {
        case GET_COUNT + '_PENDING':
            return {
                ...state,
                pending: true,
            }
            case GET_COUNT + '_SUCCESS':
            return {
                ...state,
                pending: false,
                count: action.payload  ? action.payload : [],
            }
        case GET_COUNT + '_ERROR':
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

export default Count
