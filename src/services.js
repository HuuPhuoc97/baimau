import { API_URL } from 'config'
import axios from 'axios'


const AUTH_TOKEN = window.localStorage.getItem('jwt')
let form = axios.create({
    baseURL: API_URL,
    validateStatus: function(status) {
        return status >= 200 && status < 500 // default
    },
})
form.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export const setToken = AUTH_TOKEN => {
    if (AUTH_TOKEN) {
        form.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN
    } else {
        delete form.defaults.headers.common['Authorization']
    }
}
setToken(AUTH_TOKEN)

const services = {
    userRegister: params => {
        setToken(null)
        return form.post('/auth/local/register', params).then(
            res => res.data,
            error => {
                throw new Error(error)
            }
        )
    },
    userLogin: params => {
        delete form.defaults.headers.common['Authorization']
        return form.post('/auth/local', params).then(res => res.data)
    },
    userUpdate: (params, id) => {
        console.log('update', params);    
        return form
            .put('/users/' + id, params)
            .then(res => res.data)
    },
    uploadAvatar: (params, id) => {
        console.log('image', params);    
        return form
            .put('/users/' + id, params)
            .then(res => res.data)
    },
    getCurrentUser: () => {
        return form
            .get('/users/me')
            .then(res => res.data)
            .catch(error => {
                //console.log(error);
            })
    },
    getCount: () => {
        return form
            .get('/posts?public=true')
            .then(res => res.data)
            // .then(data => {
            //     if (data.error) return []
            //     return data
            // })
            .catch(error => {
                //console.log(error);
            })
           
    },
    getUser:id=>{
        return form
            .get('/users/' + id)
            .then(res => res.data)
            .catch(error => {
                //console.log(error);
            })
    },
    getPosts: (page = 1, limit = 3,ispublic) => {
        let start = (page - 1) * limit;
        
        return form
            .get(API_URL + '/posts?_sort=id:desc&_start=' + start + '&_limit=' + limit + '&public=' + ispublic)
            .then(res => res.data)
            .then(data => {
                if (data.error) return []
                return data
            })
            .catch(error => {
                //console.log(error);
            })
    },
    // 
  
//    
    getMyPosts: ( user, page=1, limit = 3) => {
        let start = (page - 1) * limit
        return form
            .get(
                API_URL +
                    '/posts?_sort=id:desc&user=' +
                    user +
                    '&_start=' +
                    start +
                    '&_limit=' +
                    limit
            )
            .then(res => res.data)
            .then(data => {
                if (data.error) return []
                return data
            })
            .catch(error => {
                //console.log(error);
            })
    },
    getAllMyPosts: ( user) => {
        
        return form
            .get(
                API_URL +
                    '/posts?user=' +
                    user 
            )
            .then(res => res.data)
            .then(data => {
                if (data.error) return []
                return data
            })
            .catch(error => {
                //console.log(error);
            })
    },

    getPostDetails: id => {
        return form.get(API_URL + '/posts/' + id).then(res => res.data)
    },
    getOurTeams: (page = 1, limit = 3) => {
        let start = (page - 1) * limit
        return form
            .get(API_URL + '/ourteams?_start=' + start + '&_limit=' + limit)
            .then(res => res.data)
            .then(data => {
                if (data.error) return []
                return data
            })
            .catch(error => {
                //console.log(error);
            })
    },
    userCreatPost: params => {
        // delete form.defaults.headers.common['Authorization']
        return form.post('/content-manager/explorer/posts/?source=content-manager', params).then(res => res.data)
    },
    uploadCreatePost: params => {       
        return form.post('/content-manager/explorer/posts/?source=content-manager', params).then(res => res.data)
    },
    uploadCategories: () => {
        return form.get(API_URL + '/categories').then(res => res.data)
    },
    postUpdate: (params) => {
        console.log('update', params);    
        return form
            .put('/content-manager/explorer/posts/'+params.get('id')+'?source=content-manager', params)
            .then(res => res.data)
    },
}

export default services
