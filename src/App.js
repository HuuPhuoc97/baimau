import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.scss'
import Main from './containers/Main'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './store'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {}
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Main />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
