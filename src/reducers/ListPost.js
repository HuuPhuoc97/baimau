import {FETCH_LIST_POST} from 'actions/ActionTypes'

const initState = {
    posts: [],
    pending: false,
    error: false,
};

const ListPost = (state = initState, action) => {
    switch (action.type) {
        case FETCH_LIST_POST + '_PENDING':
            return {
                ...state,
                pending: true,
            }
        case FETCH_LIST_POST + '_SUCCESS':
            return {
                ...state,
                pending: false,
                posts: action.payload ? action.payload : []
            }
        case FETCH_LIST_POST + '_ERROR':
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

export default ListPost