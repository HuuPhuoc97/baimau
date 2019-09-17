import React, { Component } from 'react'
import { Progress } from 'antd'
export default class Loading extends Component {
    constructor() {
        super()
        this.state = {
            loading: 0,
        }
    }
    componentDidMount() {
        this.t = setInterval(() => {
            this.setState({
                loading: this.state.loading + 1,
            })
        }, 200)
    }
    componentWillUnmount() {
        clearInterval(this.t)
    }
    render() {
        return (
            <div>
                <Progress type="circle" percent={this.state.loading} />
            </div>
        )
    }
}
