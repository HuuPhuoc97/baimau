import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setTitleAction, loginAction, getCurrentUser } from 'actions'
// import { push } from 'react-router-redux'
import { Redirect, Link } from 'react-router-dom'
import Message from 'antd/lib/message';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            identifier: 'quan@gmail.com',
            email: 'quan@gmail.com',
            password: '@123123123',
            message: '',
            isSuccess: false,
            hasErrorEmail: false,
        }
    }

    changeEmail = e => {
        this.setState({ email: e.target.value })
    }

    changePassword = e => {
        this.setState({ password: e.target.value })
    }

    submitForm = e => {
        let data = {
            identifier: this.state.email,
            email: this.state.email,
            password: this.state.password,
        }
        e.preventDefault()
        this.props.dispatch(loginAction(data)).then(({ value, action }) => {
            console.log(value);
            if (!value.error) {
                this.props.dispatch(getCurrentUser())
                Message.success('Login successful!');
                //  this.props.dispatch(push('/posts'))
                this.setState({
                    isSuccess: true,
                    message: '',
                })

            } else {
                this.setState({
                    isSuccess: false,
                    message: value.message,
                })
            }


        })


    }

    checkValidate() {
        this.setState({ hasErrorEmail: this.state.email ? true : false })
        return this.state.email ? true : false
    }

    componentDidMount() {
        this.props.setTitle('LogIn', 'Home / Login')
    }

    render() {

        if (this.props.location.pathname.indexOf('/login') >= 0)
            if (this.state.isSuccess) {
                return (
                    <Redirect
                        to={{
                            pathname: '/posts',
                        }}
                    />
                )
            }
        return (
            <div className="App-Log">
                <div className="container">
                <div className="Header">
                    <h1>Sign in</h1>
                </div>
                <div className="Boder" />
                <div className="td">
                    <p>
                        <Link to="/login">

                            <b style={{ borderBottom: '2px solid green' }}> LOGIN </b>
                        </Link>
                        <Link to="/register">
                            <b>REGISTRATION</b>
                        </Link>
                    </p>
                </div>
                {/* <div className="td">
                <p id="a">
                    <a href="/login"><b>LOGIN</b></a>
                </p>
                <p id="b"><b style={{borderBottom:'2px solid green'}}>REGISTRATION</b></p>
            </div> */}
                <div className="login-container">
                    <form onSubmit={this.submitForm} action="">
                        <div className="form-group">
                            {this.state.isSuccess ? (
                                <Alert bsStyle="success">
                                    Login Successfull.
                                </Alert>
                            ) : (
                                    ''
                                )}
                            {this.state.message ? (
                                <Alert bsStyle="danger">
                                    {this.state.message}
                                </Alert>
                            ) : (
                                    ''
                                )}
                            <label id="c">Username or e-mail</label>
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                placeholder="Email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                name="fname" required
                            />
                        </div>

                        <div className="form-group">
                            <label id="d">Password</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                name="fname" required
                            />
                        </div>
                        <button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
                <p className="ft">or enter with</p>
                <span className="abcd">
                    <i className="fab fa-facebook-square" />
                    <i className="fab fa-twitter-square" />
                    <i className="fab fa-google-plus" />
                </span>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    setTitle: (title, breadcumb) => dispatch(setTitleAction(title, breadcumb)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
