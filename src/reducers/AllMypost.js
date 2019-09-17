import {ALL_MYPOST} from 'actions/ActionTypes'


const initState = {
    post: [],
    pending: false,
    error: false,
};

const AllMyposts = (state = initState, action) => {
    switch (action.type) {
        case ALL_MYPOST + '_PENDING':
            return {
                ...state,
                pending: true,
            }
            case ALL_MYPOST + '_SUCCESS':
            return {
                ...state,
                pending: false,
                post: action.payload ? action.payload : []
            }
        case ALL_MYPOST + '_ERROR':
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

export default AllMyposts
