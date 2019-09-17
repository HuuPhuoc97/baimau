import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from 'actions'
import routes from './Routes'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {Helmet} from "react-helmet";
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        // setTimeout(() => this.props.dispatch(getCurrentUser()), 3000);
        this.props.dispatch(getCurrentUser());
    }
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>Blog - React - TNM Open Source</title>
                </Helmet>
                <Header />
                <main>
                    <Switch>{renderRoutes(routes)}</Switch>
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default withRouter(connect(mapStateToProps)(Main))
