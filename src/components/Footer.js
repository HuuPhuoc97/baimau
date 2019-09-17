import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux'
import moment from 'moment';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {

        let { posts } = this.props;
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ margin: 0 }}>
                            <h4>BLOG</h4>
                            <p>Feel the power of future</p>
                            <span><i className='fab fa-facebook-square'></i>
                                <i className='fab fa-twitter-square'></i>
                                <i className='fab fa-google-plus-square'></i>
                                <i className='fab fa-invision'></i>
                            </span>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " style={{ margin: 0 }}>
                            <h5>NEWSLETTER</h5>
                            <p>Keep up with our always upcoming product features and technologies.
                                Enter your e-mail and subscribe to our newsletter.</p>
                            <div className="input-group ">
                                <span className="input-group-addon"><i className="far fa-envelope" style={{ margin: 0 }} ></i></span>
                                <input type="text" className="form-control" placeholder="Type your E-mail" />
                                <div className="input-group-append">
                                    <Button bsStyle="success">Subscribe</Button>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 " style={{ margin: 0 }}>
                            <h5>USEFUL LINK</h5>
                            <ul>
                                <li> <Link to="/about-us">
                                    About Us </Link>
                                </li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                                <li><Link to="/#">Services</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/#">Clients</Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                            <h5>LATEST NEWS</h5>
                            {posts.map(item => (
                                <div key={item.id}>
                                <span><i className='fas fa-arrow-right' > </i>

                                    {moment(item.created_at).format('L')} <br />
                                    {item.title}<br /></span>
                                    </div>
                            ))}



                        </div>
                    </div>
                    <p id="intense"> Blog 2019 Privacy policy</p>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    posts: state.ListPost.posts,
    // setTitle: (title, breadcumb) => dispatch(setTitleAction(title, breadcumb)),
})

export default connect(
    mapStateToProps
)((Footer));