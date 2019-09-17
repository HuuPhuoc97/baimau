import {
    PAGE_CHANGE,
    FETCH_LIST_POST,
    FETCH_OUR_TEAM,
    FETCH_POST_DETAIL,
    GET_CURRENT_USER,
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
    USER_UPDATE,
    USER_CREAT_NEWPOST,
    USER_ALL_CATEGORIES,
    USER,
    USER_MYPOST,
    GET_COUNT,
    ALL_MYPOST,
} from './ActionTypes'
import services from '../services'

export const registerAction = data => (dispatch, getState) => {
    return dispatch({
        type: USER_REGISTER,
        payload: services.userRegister(data),
    })
}

export const loginAction = data => (dispatch, getState) => {
    return dispatch({
        type: USER_LOGIN,
        payload: services.userLogin(data),
    })
}
export const updateAction = (data, updateId) => (dispatch, getState) => {
    return dispatch({
        type: USER_UPDATE,
        payload: services.userUpdate(data, updateId),
    })
}
export const uploadAvatarAction = (data, updateId) => (dispatch, getState) => {
    return dispatch({
        type: USER_UPDATE,
        payload: services.uploadAvatar(data, updateId),
    })
}

export const logoutAction = () => (dispatch, getState) => {
    return dispatch({
        type: USER_LOGOUT,
        payload: Promise.resolve(true)
    })
}

export const getCurrentUser = () => (dispatch, getState) => {
    return dispatch({
        type: GET_CURRENT_USER,
        payload: services.getCurrentUser(),
    }).then(data => {
       
    })
}
export const postAction = (data, updateId) => (dispatch, getState) => {
    return dispatch({
        type: "POST_EDIT",
        payload: services.postUpdate(data, updateId),
    })
}
export const setTitleAction = (title, breadcrumb) => ({
    type: PAGE_CHANGE,
    data: {
        title,
        breadcrumb,
    },
})

export const getListPostAction = (page, limit,ispublic ) => (dispatch, getState) => {
    return dispatch({
        type: FETCH_LIST_POST,
        payload: services.getPosts(page, limit ,ispublic),
    })
}
//
export const getMyPosts = (user,page, limit) => (dispatch, getState) => {
    return dispatch({
        type: USER_MYPOST,
        payload: services.getMyPosts(user,page, limit),
    })
}
export const getAllMyPosts = (user) => (dispatch, getState) => {
    return dispatch({
        type: ALL_MYPOST,
        payload: services.getAllMyPosts(user),
    })
}
//
export const getUser = (id) => (dispatch, getState) => {
    return dispatch({
        type: USER,
        payload: services.getUser(id),
    })
}
export const getPostAction = postId => (dispatch, getState) => {
    return dispatch({
        type: FETCH_POST_DETAIL,
        payload: services.getPostDetails(postId),
    })
}

export const setListOurTeam = (page, limit) => (dispatch, getState) => {
    return dispatch({
        type: FETCH_OUR_TEAM,
        payload: services.getOurTeams(page, limit),
    })
}


export const creatPostAction = data => (dispatch, getState) => {
    return dispatch({
        type: USER_CREAT_NEWPOST,
        payload: services.userCreatPost(data),
    })
}

export const uploadAction = data => (dispatch, getState) => {
    return dispatch({
        type: USER_CREAT_NEWPOST,
        payload: services.uploadCreatePost(data),
    })
}
export const allcategories = () => (dispatch, getState) => {
    return dispatch({
        type: USER_ALL_CATEGORIES,
        payload: services.uploadCategories(),
    })
}



export const getCount = () => (dispatch, getState) => {
    return dispatch({
        type: GET_COUNT,
        payload: services.getCount(),
    })
    .then(data => {
       
    })
}