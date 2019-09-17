import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { getPostAction,getUser } from 'actions';
import { connect } from 'react-redux'
import moment from 'moment';
import { API_URL } from 'config';

import { Image } from 'react-bootstrap';

var day = moment().format('LL');
class PostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: day,
           
        }
        this.timer = null;
    }

    componentDidMount() {
        let postId = this.props.match.params.id;
        this.props.dispatch(getPostAction(postId)).then((data) =>{
            if(!data.value.error){
                this.props.dispatch(getUser(data.value.user.id));
            }
        });
        
       
    }

    render() {
        // let auth = this.props.auth;
        let posts = this.props.posts;
        let user = this.props.user;
        let post = this.props.postDetail;
        let isLoaded = true;
        if (!isLoaded) {
            return <div>Loading ... </div>;
        }
        else {
            return (
                <div>
             
                    <div className="headdetail">
                        <div className="contain">
                            <div className="row">
                                <div className="headder">
                                    <div className="top">
                                        <div className="MenuRight1">
                                            <a href="#/">Home / </a>
                                            <a href="#/"> Pages / </a> 
                                            <a href="#/"> Blog</a>
                                        </div>
                                        <div className="tilte"><p>{post.title}</p></div>
                                        <div className="time">
                                            <i className="far fa-clock">{this.state.time}</i>
                                            <i className="far fa-comment-alt">    143</i>
                                            <i className="fas fa-heart">   500</i>
                                            <i className="fas fa-share">   200</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="details">
                        <div className="row">
                            <div className="col-xs-2 col-sm-0 col-md-1 col-lg-0 "></div>

                            <div className="col-xs-2 col-sm-2 col-md-3 col-lg-2" >
                                <div className="hs">
                               
                             
                                {user.avatar ?
                                    //  auth && auth.avatar ?
                               
                                    <Image className="card-img-top" src={API_URL + user.avatar.url} />

                                    :
                                    <Image className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KKk22o-PiYCzh7Mc7G8KvPbiSFypE06mkSKWnRqP9lmjp1Yy" />}

                                <div className="card-body">
                                    <h5 className="card-title"><b>{post.author}</b></h5>
                                    <p className="card-text">Support Operation</p>
                                </div>
                                <span>
                                <i className='fab fa-facebook-square'></i>
                                <i className='fab fa-twitter-square'></i>
                                <i className='fab fa-google-plus-square'></i>
                                </span>
                                <div className="card1">
                                    <small className="text-muted"><p>ALL POST</p></small>
                                </div>
                                </div>
                                {/* <img class="card-img-top" src='' alt="Card image cap" /> */}
                                
                                
                            </div>

                            <div className='col-xs-7 col-sm-8 col-md-7 col-lg-7'>
                                <div className="icon">

                                    {post.photo ?
                                        <Image className="icon1" src={'http://dev.inlumina.com:8123/' + post.photo.url} />
                                        : ''}

                                </div>
                                <div className="word"><p dangerouslySetInnerHTML={{ __html: post && post.content ? post.content.replace("\n", '<br>') : '' }}></p></div>
                                {/* <div dangerouslySetInnerHTML>{post.content}</div> */}
                                <div className="conclusion">
                                    <p>{post.conclusion}</p>
                                </div>
                                <div className="foot">

                                    <button type="button" className="btn btn-warning"><i className="far fa-heart"></i>   <b>LIKE</b></button>
                                    <Button bsStyle="info"><i className="fab fa-facebook-f" />   <b> SHARE ON FACEBOOK</b></Button>
                                    <Button bsStyle="primary"><i className="fab fa-twitter" />    <b>SHARRE ON TWITTER</b></Button>

                                </div>
                                <div className="tagbar">
                                    {post.categories ? post.categories.map(cat => (
                                        <Button key={cat.id}><b>{cat.name}</b></Button>
                                        // <Button><b>UX</b></Button>
                                        // <Button><b>MARKETING</b></Button>
                                        // <Button><b>NEWS</b></Button>
                                    )) : ''}
                                </div>
                                <div className="Boder1"></div>
                                {posts.length >0 ?
                                <div>
                                <div><h3>RELATED POSTS</h3></div>
                                <div className="abc">
                                    <div className="row">
                                        {posts.map(item => (
                                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6" key={item.id}>

                                                <div className="row" >
                                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> {item.photo ? <Image src={API_URL + item.photo.url} /> :
                                                        <Image src="https://www.topitworks.com/blogs/wp-content/uploads/2018/01/react-native-1024x631.png" />
                                                    }</div>
                                                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                                        <div><i className="fa fa-arrow-right left"></i><p>{moment(item.created_at).format('L')}</p></div>
                                                        <div><p className="line1">{item.title}</p></div>
                                                    </div>
                                                </div>
                                            </div>))}
                                     
                                    </div>
                                </div> 
                                </div>: <h1>No post</h1>}
                            
                                <div className="Boder1"></div>
                                {/* <h3>COMMENTS</h3> */}
                                {/* <div className="media border p-3 a">
                                    <img src="https://www.caldwellsecurities.com/images/default-source/default-album/john-davitskycc68baba6d596b9a885bff0000bcd1e6.jpg?sfvrsn=5e31d1c6_0" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{ width: "60px" }} />
                                    <div className="media-body">
                                        <h4>John Doe <small><i>Posted on February 19, 2018</i></small>  <Button><i className="far fa-thumbs-up">Like</i></Button><Button><i className="far fa-comment-alt">Reply</i></Button></h4>
                                        <p>Very smart people.....................</p>
                                    </div>
                                </div> */}
                                {/* <div className="media border p-3 b">
                                    <img src="https://znews-photo.zadn.vn/w660/Uploaded/ofh_fdmzsofw/2018_02_15/201710100427022.jpg" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{ width: "60px" }} />
                                    <div className="media-body">
                                        <h4>John Doe <small><i>Posted on February 19, 2018</i></small><Button><i className="far fa-thumbs-up">Like</i></Button><Button><i className="far fa-comment-alt">Reply</i></Button></h4>
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </div> */}
                                {/* <h3 className="leave">LEAVE A COMMENT</h3>
                                <div className="form-group">
                                    <label>Massage:</label>
                                    <textarea className="form-control" rows="5" id="comment"></textarea>

                                </div>
                                <button type="button" className="btn btn-success">COMMENT</button> */}
                            </div>
                            <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                        </div>
                    </form>
                </div>
            );
        }
    }
}


const mapStateToProps = (state, ownProps) => {
    return{
        postDetail: state.PostDetail.post,
        auth: state.Common.auth,
        posts: state.ListPost.posts,
        user:state.User.user,
    }

}

export default connect(
    mapStateToProps
)((PostDetails));
