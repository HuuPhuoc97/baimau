import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { setTitleAction } from 'actions';
import { connect } from 'react-redux'


class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.dispatch(setTitleAction("Careers","Home / Page / Careers"));
    }

    render() {
        return (
            <div className="careers">
                <h1> Join Our Team </h1>
                <hr />
                <p> Take a job opportunity of a lifetime - join
                    the team of Intense. We cherish active tech savies
         willing to works on <br /> projects of any type and complexity. If you are
         enthusiastic about tech innovations and ready to make impactful <br /> decisions,feel free to send us your CV. We are interested
         in hiring professionals for a long term and also <br /> provide an opportunity of remote work. </p>
                <Button className="btn btn-success"><i className="fas fa-check-double"></i><p> GET STARTED NOW</p></Button>
                <div className="body1">


                    <h2>Your Careers Start Here</h2>
                    <p>Can't find the job  you want?Send your resume to info@demolink.com, and we'll contat you when a new position opens.
              </p>
                    <section className="header">
                        <svg
                            className="svg-triangle-bottom"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <defs>
                                <linearGradient
                                    id="grad2"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop
                                        stopColor="rgba(14, 99, 177, 1)"
                                        stopOpacity="100%"
                                        offset="0%"
                                    />
                                    <stop
                                        stopColor="rgba(122, 175, 232, 1)"
                                        stopOpacity="100%"
                                        offset="100%"
                                    />
                                </linearGradient>
                            </defs>
                            <polyline points="0,0 60,0 29,29" fill="url(#grad2)" />
                        </svg>
                    </section>
                </div>
                <div className="row timecareers">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    {/* <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"> */}
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Senior Job Position</h4>
                                    <p>
                                        <i className="fas fa-map-marker-alt">  New York </i>
                                        <i className="far fa-clock">Full Time</i>
                                        <i className="far fa-calendar-alt">March,12,2019</i></p>

                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Middle Job Position</h4>
                                    <p>  <i className="fas fa-map-marker-alt">New York</i> <i className="far fa-clock">Full Time</i><i className="far fa-calendar-alt">March,10,2019</i></p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Junior Job Position</h4>
                                    <p><i className="fas fa-map-marker-alt"> New York </i>  <i className="far fa-clock">Full Time</i><i className="far fa-calendar-alt">March,12,2019</i></p>


                                </div>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Junior Job Position 2</h4>
                                    <p><i className="fas fa-map-marker-alt"> New York </i>
                                        <i className="far fa-clock">Full Time</i>
                                        <i className="far fa-calendar-alt">March,12,2019</i></p>


                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Senior Job Position 2</h4>
                                    <p><i className="fas fa-map-marker-alt"> New York </i>  <i className="far fa-clock">Full Time</i><i className="far fa-calendar-alt">March,15,2019</i></p>


                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Middle Job Position 2</h4>
                                    <p><i className="fas fa-map-marker-alt"> New York </i>  <i className="far fa-clock">Full Time</i><i className="far fa-calendar-alt">March,21,2019</i></p>


                                </div>
                            </div>
                        </div>


                    
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

            </div>


        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    title: state.title,
})
export default connect(
    mapStateToProps
)((Careers));

