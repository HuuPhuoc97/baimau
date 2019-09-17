import Loadable from 'react-loadable'
import Loading from '../components/Loading'

const ViewAsync = view =>
    Loadable({
        loader: () =>
            import(/* webpackChunkName: "view" */ 'components/' + view),
        loading: Loading,
        delay: 3000000, // 0.3 seconds
    })

export const routes = [
    {
        path: '/',
        component: ViewAsync('Home'),
        exact: true,
    },
    // {
    //     path: '/home',
    //     component: Home,
    //     routes: [
    //         {
    //             path: '/home/login',
    //             component: Login,
    //         },
    //         {
    //             path: '/home/cart',
    //             component: Home,
    //         },
    //     ],
    // },
    {
        path: '/login',
        component: ViewAsync('User/Login'),

    },
    {
        path: '/register',
        component: ViewAsync('User/Register'),
    },
    {
        path: '/posts',
        component: ViewAsync('Post/ListPosts'),

    },
    {
        path:'/my-post/edit-post/:id',
        component: ViewAsync('User/Edit'),
    },
    {
        path: '/post/detail/:id',
        component: ViewAsync('Post/PostDetails'),
    },
    {
        path: '/ourteams',
        component: ViewAsync('OurTeam/OurTeam'),
    },
    {
        path: '/pricing',
        component: ViewAsync('Pricing'),
    },
    {
        path: '/contact-us',
        component: ViewAsync('ContactUs'),
    },
    {
        path: '/about-us',
        component: ViewAsync('AboutUs'),
    },
    {
        path: '/careers',
        component: ViewAsync('User/Careers'),
    },
    {
        path: '/profile',
        component: ViewAsync('User/MyProfile'),
    },
    {
        path: '/my-post',
        component: ViewAsync('User/MyPost'),
    },
    {
        path: '/create-new-post',
        component: ViewAsync('User/CreateNewPost'),
    },
    {
        path: '/upload',
        component: ViewAsync('Page/Upload'),
    },
]

export default routes