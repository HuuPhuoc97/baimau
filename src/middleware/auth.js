import { USER_LOGIN, USER_LOGOUT, USER_REGISTER } from 'actions/ActionTypes'
import {setToken} from 'services';

const auth = store => next => action => {
    if (action.type === USER_LOGIN + '_SUCCESS' || action.type === USER_REGISTER + '_SUCCESS' ) {
        if (action.payload && action.payload.jwt) {
            window.localStorage.setItem('jwt', action.payload.jwt)
            setToken(action.payload.jwt)
        }
    } else if (action.type === USER_LOGOUT + '_SUCCESS') {
        window.localStorage.setItem('jwt', '')
        setToken(null)
    }
    next(action)
}
export default auth;