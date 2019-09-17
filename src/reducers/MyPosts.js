import {USER_MYPOST} from 'actions/ActionTypes'


const initState = {
    posts: [],
    pending: false,
    error: false,
};

const MyPosts = (state = initState, action) => {
    switch (action.type) {
        case USER_MYPOST + '_PENDING':
            return {
                ...state,
                pending: true,
            }
            case USER_MYPOST + '_SUCCESS':
            return {
                ...state,
                pending: false,
                posts: action.payload ? action.payload : []
            }
        case USER_MYPOST + '_ERROR':
            return {
                ...state,
                error: true,
            }
        default:
            return state
    }
}

export default MyPosts
