import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setTitleAction, getListPostAction, getCount } from 'actions'
import ListItem from './ListItem'
// import { Pagination, List } from 'antd';
// import { Helmet } from "react-helmet";




class ListPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active: 1
        }
        this.getListPosts = this.getListPosts.bind(this);

    }

    getListPosts(page = 1, limit = 6, ispublic = true) {
        let { dispatch } = this.props;
        dispatch(getListPostAction(page, limit, ispublic));
        this.setState({
            active: page
        })
    }
    
    componentDidMount() {
        this.props.dispatch(setTitleAction("BLOG", 'Home / Page / Blog'));
        this.getListPosts();
        this.props.dispatch(getCount());


    }


    pagination = () => {
        let items =[] ;
        
        
        for (let number = 1; number <= this.props.count.length / 6 + 1; number++) {

            items.push(
                
                <Pagination.Item active={number===this.state.active}
                 onClick={() => this.getListPosts(number)} 
                key={number}  >
                    <p> {number} </p>
                </Pagination.Item>,
               
               
            );

        }

        return (
            
            <div>
            
                <Pagination >
                    <Pagination.First id="pa"  onClick={() => this.getListPosts(this.state.active -1)}  />
                    {items}
                    <Pagination.Last id="pa" onClick={() => this.getListPosts(this.state.active + 1)} />
                </Pagination>




            </div>
        );

    }

    goToDetail = (postId) => {
        this.props.history.push('/post/detail/' + postId);
    }




    render() {
        let posts = this.props.posts;


        return (
            <div className="list">

                <div className="row" style={{ margin: '0' }}>
                    {posts.map(item => (
                        <ListItem key={item.id} item={item} showTitle={this.showTitle} goToDetail={this.goToDetail} />
                    ))}
                </div>

                <div className="page">
                    {this.pagination()}
                </div>




                {/* <Pagination>
                        <Pagination.Item onClick={() => this.getListPosts(1)}>1</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(2)}>2</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(3)}>3</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(4)}>4</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(5)}>5</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(6)}>6</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(7)}>7</Pagination.Item>
                        <Pagination.Item onClick={() => this.getListPosts(8)}>8</Pagination.Item>
                        </Pagination> */}








            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.ListPost.posts,
        count: state.Count.count,
    }


}

export default connect(
    mapStateToProps
)((ListPosts));