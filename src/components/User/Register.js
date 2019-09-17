import React, { Component } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { setTitleAction, registerAction } from '../../actions'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Message from 'antd/lib/message';
class Registers extends Component {
    constructor() {
        super()
        this.checkValidate = this.checkValidate.bind(this)
        this.checkPass = this.checkPass.bind(this)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: '',
            message: '',
            isSuccess: false,
            hasErrorEmail: false,
            hasErrorPass: false,

        }
    }

    changeName = e => {
        this.setState({ name: e.target.value })
    }
    changeEmail = e => {
        this.setState({ email: e.target.value })
    }
    changePass = e => {
        this.setState({ password: e.target.value })
    }
    changeConfirm = e => {
        this.setState({ confirm: e.target.value })
    }

    submitForm = e => {
        e.preventDefault();
        if(!this.checkValidate() || !this.checkPass()){
            return;
        }
        let data = {
            identifier: this.state.email,
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            confirm: this.state.confirm,
        }
        this.props.dispatch(registerAction(data)).then(({ value, action }) => {
            if (!value.error) {
                Message.success('Register successful!');
                this.setState({
                    isSuccess: true,
                    message: '',
                })
                return
            } else {
                this.setState({
                    isSuccess: false,
                    message: value.message,          
                })           
            }
        })
    }

    checkValidate() {
        this.setState({ hasErrorEmail: !this.state.email ? true : false })
        return this.state.email ? true : false
    }

    checkPass() {
        if (this.state.password === this.state.confirm) {
            // this.state.hasErrorPass= false;
            this.setState({
                hasErrorPass: false       
            })
            return true;   
        } else {
            // this.state.hasErrorPass= true;
            this.setState({
                hasErrorPass: true       
            })
            return false; 
        }
    }

    componentDidMount() {
        this.props.setTitle('Register', 'Home / Page / Register')
    }

    render() {
        if (this.state.isSuccess) {
            return (
                <Redirect
                    to={{
                        pathname: '/posts',
                    }}
                />
            )
        }
        
        if (this.props.location.pathname.indexOf('/register') >= 0)
        return (
            <div className="main-reg">
                <div className="container">
                <div className="Header">
                    <h1>Sign in</h1>
                </div>
                <div className="Boder" />
                <div className="td">
                    <p>
                        
                        <Link to="/login">
                            <b>LOGIN</b>
                        </Link>
                        <Link to="/register">

                            <b style={{ borderBottom: '2px solid green' }}> REGISTRATION </b>
                        </Link>
                    </p>
                </div>

                    <form action="/register" onSubmit={this.submitForm}>
                        <div className="form-group">
                            {this.state.hasErrorPass && !this.state.message ? (
                                <Alert bsStyle="danger">
                                    Confirm password does not match
                                </Alert>
                            ) : ''}
                            {this.state.isSuccess && this.state.hasErrorPass ? (
                                <Alert bsStyle="success">
                                    Register Successfull. Thanks.
                                </Alert>
                            ) : ('')}
                            {this.state.message ? (
                                <Alert bsStyle="danger">
                                    {this.state.message}
                                </Alert>
                            ) : ('') }

                            <label className="control-label">Name:</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                value={this.state.name}
                                onChange={this.changeName}
                                name="name"
                                required
                            />
                        </div>

                        <div
                            className={
                                this.state.hasErrorEmail
                                    ? 'form-group has-error'
                                    : 'form-group'
                            }
                        >
                            <label>Email:</label>
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                value={this.state.email}
                                onChange={this.changeEmail}
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                value={this.state.password}
                                onChange={this.changePass}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                value={this.state.confirm || ''}
                                onChange={this.changeConfirm}
                                name="cpassword"
                                required
                            />
                        </div>
                        <br />
                        <Button className="btn btn-success" type="submit">
                            CREATE AN ACCOUNT
                        </Button>
                    </form>
                    <br />
                    <p className="orwith">or enter with</p>
                    <span>
                        <i className="fab fa-facebook-square" />
                        <i className="fab fa-twitter-square" />
                        <i className="fab fa-google-plus" />
                    </span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    title: state.title,
    breadcrumb: state.breadcrumb,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    setTitle: (title, breadcumb) => dispatch(setTitleAction(title, breadcumb)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registers)
