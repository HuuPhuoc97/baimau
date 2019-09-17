import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
    PAGE_CHANGE,
    SET_AUTH_TOKEN,
    GET_CURRENT_USER,
    USER_CREAT_NEWPOST,
    USER_UPDATE 
} from 'actions/ActionTypes'


const initState = {
    title: '',
    breadcrumb: '',
    auth: null,
    auth_token: null,
}

const Common = (state = initState, action) => {
    switch (action.type) {
        case USER_REGISTER + '_SUCCESS':
            return {
                ...state,
                auth_token: action.payload.jwt ? action.payload.jwt : null,
                auth: action.payload.user ? action.payload.user : null,
            }
        case USER_LOGIN + '_SUCCESS':
            return {
                ...state,
                auth_token: action.payload.jwt ? action.payload.jwt : null,
                auth: action.payload.user ? action.payload.user : null,
            }
        case USER_LOGOUT + '_SUCCESS':
            return {
                ...state,
                auth_token: null,
                auth: null,
            }
        case USER_UPDATE + '_SUCCESS':
            return {
                ...state,
                // auth: action.payload.name && action.payload.username ? action.payload : null,
                auth: action.payload ? action.payload : null,
            }
        case SET_AUTH_TOKEN:
            return {
                ...state,
                auth_token: action.user.token,
            }
        case GET_CURRENT_USER + '_SUCCESS':
            return {
                ...state,
                auth: action.payload && action.payload.id ? action.payload : null,
            }
        case USER_CREAT_NEWPOST + '_SUCCESS':
            return {
                ...state,
                auth_token: action.payload.jwt ? action.payload.jwt : null,
                // auth: action.payload.user ? action.payload.user : null,
            }
        // case USER_MYPOST + '_SUCCESS':
        //     return {
        //         ...state,
        //         auth: action.payload && action.payload.id ? action.payload : null,
        //     }

        case PAGE_CHANGE:
            return {
                ...state,
                title: action.data.title,
                breadcrumb: action.data.breadcrumb,
            }
        default:
            return state
    }
}

export default Common
