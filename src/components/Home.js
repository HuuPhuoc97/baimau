import React, { Component } from 'react'
import moment from 'moment'
import {Helmet} from "react-helmet";
import Button from 'react-bootstrap/lib/Button'
import { connect } from 'react-redux'
import { setTitleAction } from '../actions'
import Loading from './Loading';
const endDay = '2019-03-20 00:00:00'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
        }
        this.timer = null
    }

    componentWillUnmount() {
        this.setState({
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
        })
        clearInterval(this.timer)
    }

    componentDidMount() {
        this.props.setTitle('Home')
        this.timer = setInterval(() => {
            let end = moment(endDay, 'YYYY-MM-DD HH:mm:ss')
            let start = moment()
            let duration = moment.duration(end.diff(start))
            let milliseconds = duration.asMilliseconds()
            // Check STOP TIMER () with milliseconds < 0  clearInterval(this.timer);
            if (milliseconds > 0) {
                let years = duration.years()
                let months = duration.months()
                let days = duration.days()
                let hours = duration.hours()
                let mins = duration.minutes()
                let secs = duration.seconds()

                this.setState({
                    days:
                        months > 0
                            ? years * 365 +
                              months *
                                  moment(
                                      years + '-' + months,
                                      'YYYY-MM'
                                  ).daysInMonth() +
                              days
                            : days,
                    hours: hours,
                    mins: mins,
                    secs: secs,
                })
            } else {
                clearInterval(this.timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div className="App-MainTain">
                <Loading/>
                <Helmet>
                    <title>Blog React - TNM Open Source</title>
                </Helmet>
                <div className=".container">
                    <center>
                        <p id="a">We are curently working on.</p>
                        <p id="b">The page will appear in </p>
                    </center>
                    <center>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="day">
                                    {this.state.days} <p>Days</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="hour">
                                    {this.state.hours} <p>Hours</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="min">
                                    {this.state.mins} <p>Minutes</p>{' '}
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="sec">
                                    {this.state.secs}
                                    <p>Seconds</p>
                                </div>
                            </div>
                        </div>
                    </center>

                    <p>Stay tuned and subscribe to our newsleter</p>

                    <div className="input-group-group">
                        <div className="input-group ">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type your E-mail"
                            />
                            <div className="input-group-append">
                                <Button bsStyle="success">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    title: state.title,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setTitle: title => dispatch(setTitleAction(title)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
