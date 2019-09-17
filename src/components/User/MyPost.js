import React, { Component } from 'react';
import { API_URL } from 'config';
import { setTitleAction, getMyPosts, getAllMyPosts } from 'actions';
import { connect } from 'react-redux';
import {  Pagination, Image } from 'react-bootstrap';
import moment from 'moment';
import Menuuser from './MenuLeft';


class MyPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:1,
            fetch: true
        }
       
        this.getMyPosts = this.getMyPosts.bind(this);
        this.getAllMyposts = this.getAllMyposts.bind(this);

    }
//   page=this.props.auth.id
    getMyPosts(user=this.props.auth.id  ,page=1, limit = 3) {
        
        let { dispatch } = this.props;
        dispatch(getMyPosts(user, page, limit));
        this.setState({
            active: page
        })
    }
    getAllMyposts(user=this.props.auth.id  ){
        let { dispatch } = this.props;
        dispatch(getAllMyPosts(user));
    }
    componentDidMount() {

        this.props.dispatch(setTitleAction("MY POST"));
        if(this.props.auth ){
            let a = this.props.auth.id;
            this.getMyPosts(a);
            this.getAllMyposts(a);
        }
        
       

    }
    goToDetail = (postId) => {
        this.props.history.push('/post/detail/' + postId);
    }
    goToNewPost = (data) => {
        this.props.history.push('/my-post/edit-post/' + data);
    }
    pagination = () => {
        let items = [];
        
        for (let number = 1; number <= this.props.all.length/3 + 1 ; number++) {
            items.push(
                   <Pagination.Item active={number===this.state.active}  onClick={() => this.getMyPosts(this.props.posts.id,number,3)} key={number}  >
                   <p>{number}</p>
                 </Pagination.Item>,
            );
        }

        return (
            <div>
                <Pagination>
                <Pagination.First id="pa" onClick={() => this.getMyPosts(this.props.posts.id ,this.state.active - 1,3)}/>
                    {items}
                    <Pagination.Last id="pa" onClick={() => this.getMyPosts(this.props.posts.id ,this.state.active + 1,3)}/>
                </Pagination>

             


            </div>
        );
    }
    render() {
        let { posts } = this.props;
    
        if(this.props.auth && this.state.fetch ){
            let a = this.props.auth.id;
            this.getMyPosts(a);
            this.getAllMyposts(a);
            this.setState({
                fetch: false
            })
        }


        
       
        if (this.props.location.pathname.indexOf('/my-post') >= 0)
            return (
                <div className="mypost">

                    <div className="row">

                        <div className="col-xs-2 col-sm2 col-md-2 col-lg-2"></div>

                        <div className="col-xs-12 col-sm3 col-md-3 col-lg-3" >
                            <Menuuser  />
                            <style dangerouslySetInnerHTML={{__html: "\n#myp {\ncolor:#1fbfda;\n}\n" }} />
                        
                        </div>
                    <div className="col-xs-5 col-sm5 col-md-5 col-lg-5">
                    {posts.length <= 0 ? <h1>Your post is empty!!</h1> : ""}
                        {posts ? posts.map(item => (
                            <div className="body1" key={item.id} >

                                <p><i className='far fa-clock'></i> {moment(item.updated_at).format("MMM Do YY")}
                                    <i className='far fa-user'></i>
                                    {item.user ? item.user.name : ""}
                                    <i className='far fa-folder'></i>  {item.categories ? 
                                        item.categories.map(cat => ( <a key={cat.id} href="#/">{cat.name}</a> ))
                                        
                                        :''}
                                    <i className='far fa-comment-alt'></i> Comment
                            </p>
                                <h3>{item.title}</h3>
                                {item.photo ? <Image src={API_URL + item.photo.url} /> :
                                    <Image src="http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"/>}


                              

                                <p id="content" dangerouslySetInnerHTML={{ __html: item && item.content.substring(0, 150) ? item.content.replace("\n", '<br>').substring(0, 350) : '' }}/>
                               
                                <button className="btn default" onClick={() => this.goToDetail(item.id)}>READ MORE</button>
                                <button className="btn default a" onClick={() => this.goToNewPost(item.id)}>EDIT</button>
                                <hr />
                            </div>
                        )) : ''}
                        
                        {posts.length >0 ?
                        <div className="page">
                        {this.pagination()}
                        </div>
                        
                      
                        :""}
                    </div>
                    <div className="col-xs-2 col-sm6 col-md-2 col-lg-2"></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    title: state.title,
    auth: state.Common.auth,
    posts: state.MyPosts.posts,
    auth: state.Common.auth,
    all: state.AllMypost.post,



})
export default connect(
    mapStateToProps
)((MyPost));