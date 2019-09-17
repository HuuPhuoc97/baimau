import {USER_ALL_CATEGORIES} from 'actions/ActionTypes'


const initState = {
    cate: [],
    pending: false,
    error: false,
};

const Categories = (state = initState, action) => {
    switch (action.type) {
        case USER_ALL_CATEGORIES + '_PENDING':
            return {
                ...state,
                pending: true,
            }
            case USER_ALL_CATEGORIES + '_SUCCESS':
            return {
                ...state,
                pending: false,
                cate: action.payload ? action.payload : []
            }
        case USER_ALL_CATEGORIES + '_ERROR':
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

export default Categories
