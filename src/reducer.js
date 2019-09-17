import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';
import Common from './reducers/Common';
import ListPost from './reducers/ListPost';
import PostDetail from './reducers/PostDetail';
import OurTeam from './reducers/OurTeam';
import MyPosts from './reducers/MyPosts';
import Categories from './reducers/Categories';
import User from './reducers/User';
import Count from './reducers/Count';
import AllMypost from './reducers/AllMypost';


export default (history) => combineReducers({
    router: connectRouter(history),
    Common,
    ListPost,
    MyPosts,
    PostDetail,
    OurTeam,
    Categories,
    User,
    Count,
    AllMypost,
});
