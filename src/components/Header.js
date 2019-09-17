import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from 'actions'
import Message from 'antd/lib/message';
// import { log } from 'util';
// import { CLIENT_RENEG_LIMIT } from 'tls';
import { API_URL } from './../config';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() { }

    logoutAction = () => {
        console.log('logoutAction');
        this.props.dispatch(logoutAction());
        Message.success('Logout successful!');
    }

    breadcrumb() {
        if (this.props.location.pathname.indexOf('/post/detail') >= 0)
            return null
        return (
            <div className="app-header">
                <section className="section novi-background breadcrumb-classic">
                    <div className="header">

                        <p className="left">{this.props.title}</p>
                        <i className="fas fa-user-friends" />
                        <p className="right">{this.props.breadcrumb}</p>
                    </div>
                    <svg
                        className="svg-triangle-bottom"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                    >
                        <defs>
                            <linearGradient
                                id="grad1"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    stopColor="rgb(110,192,161)"
                                    stopOpacity="100%"
                                    offset="0%"
                                />
                                <stop
                                    stopColor="rgb(111,193,156)"
                                    stopOpacity="100%"
                                    offset="100%"
                                />
                            </linearGradient>
                        </defs>
                        <polyline points="0,0 60,0 29,29" fill="url(#grad1)" />
                    </svg>
                </section>
            </div>
        )
    }

    render() {
        let { auth } = this.props
        return (
            <header>
                <div className="app-menu">
                    <div className="menu menu-bar">
                    <img src= '/images/logo.png' alt="logo" className="logoteam"/>
                        {auth ? (
                            <div className="member-bar" >
                                {auth ? auth.name || auth.username : null}
                                <div className="member">
                                    <img
                                        alt="Loading"
                                        className="member-avatar"
                                        height="30"
                                        width="30"
                                        src={auth && auth.avatar ? API_URL + auth.avatar.url : '/images/member.png'}
                                    />
                                    <div className="dropdown-content">

                                        <Link to="/profile"> Profile</Link> <br />
                                        <Link to="/#">Settings</Link><br />
                                        <Link to="/create-new-post">Create New Post</Link><br />
                                        <Link to="/my-post">My Posts</Link><br />
                                        <Link to="/" onClick={this.logoutAction}>Logout <i className="fas fa-sign-out-alt"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <div className="topnav">
                            <ul>
                                <li>
                                    <Link to="#">
                                        {' '}
                                        <i className="fas fa-search" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fas fa-shopping-cart" />
                                    </Link>
                                </li>
                                {auth ? (""

                                ) : (
                                        <li>
                                            <Link to="/login">
                                                <b>LOGIN</b>
                                            </Link>
                                        </li>
                                    )}



                                {auth ? null : (
                                    <li>
                                        <Link to="/register">
                                            <b>REGISTER</b>
                                        </Link>
                                    </li>

                                )}
                                <li>
                                    <Link to="/about-us">
                                        <b>ABOUT US</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing" >
                                        <b>PRICING</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers">
                                        <b>CAREERS</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/posts">
                                        <b>BLOG</b>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/contact-us">
                                        <b>CONTACT US</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ourteams">
                                        <b>OUR TEAMS</b>
                                    </Link>
                                </li>
                                <li><Link to="/">
                                    <b>HOME</b>

                                </Link>
                                </li>

                            </ul>

                            {/* <Link to="/">
                                <b>HOME</b>

                            </Link>
                            <Link to="/ourteams">
                                <b>OUR TEAMS</b>
                            </Link>

                            <Link to="/posts">
                                <b>BLOG</b>
                            </Link>

                            <Link to="/pricing" >
                                <b>PRICING</b>
                            </Link>
                            <Link to="/careers">
                                <b>CAREERS</b>
                            </Link>
                            <Link to="/contact-us">
                                <b>CONTACT US</b>
                            </Link>
                            <Link to="/about-us">
                                <b>ABOUT US</b>
                            </Link>
                            {auth ? (""
                                // <Link to="/" >
                                //     {/* <b>LOGOUT</b> */}
                            {/* // </Link>
                            ) : (
                                    <Link to="/login">
                                        <b>LOGIN</b>
                                    </Link>
                                )}
                            {auth ? null : (
                                <Link to="/register">
                                    <b>REGISTER</b>
                                </Link>
                            )}
                            <Link to="#">
                                {' '}
                                <i className="fas fa-search" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-shopping-cart" />
                            </Link> */}





                        </div>
                    </div>
                </div>
                {this.breadcrumb()}
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);

    return {
        title: state.Common.title,
        breadcrumb: state.Common.breadcrumb,
        auth: state.Common.auth,
    }
}

export default connect(mapStateToProps)(withRouter(Header))
