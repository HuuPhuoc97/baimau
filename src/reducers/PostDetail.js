import { FETCH_POST_DETAIL } from 'actions/ActionTypes'

const initState = {
    post: {},
    pending: false,
    error: false,
}

const ListPost = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POST_DETAIL + '_PENDING':
            return {
                ...state,
                pending: true,
            }
        case FETCH_POST_DETAIL + '_SUCCESS':
            return {
                ...state,
                pending: false,
                post: action.payload ? action.payload : {},
            }
        case FETCH_POST_DETAIL + '_ERROR':
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

export default ListPost
