import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setTitleAction } from 'actions'

class AboutUs extends Component {
    // constructor(props) {
    //     super(props)
    // }
    componentDidMount() {
        this.props.setTitle('About Us', 'Home/ AboutUs')
    }
    render() {
        return (
            <div className="AboutUs">


                <div className="row">

                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="title ">
                            <p className="til">Who we are ?</p>
                            <div className="boder2" />
                        </div>
                        <br/>
                        <p className="data">Intense is an independent web design studio with a rich history. It started
                        as a small family-owned business in Oakville, and has growwn enough to successfully
                        occupy two large buildings in two diferent cities.<br />
                            Today Intense ofers a full range of web design,app development and content marketing services,
                        including building full-featured ecommerce websites and web startups with custom functionality. </p>

                    </div>
                    <div className="col-sm-4 right">
                        <div className="html">
                            <div><b className="left">HTML/CSS</b><b className="right">70%</b></div>
                            <div className="progress ">
                                <div className="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div><p><b className="left">JavaScripts</b><b className="right">54%</b></p></div>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div><p><b className="left">PHP</b><b className="right">87%</b></p></div>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div><p><b className="left">UI/UX Design</b><b className="right">65%</b></p></div>
                        <div className="progress">
                            <div className="progress-bar w-75 bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="line">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <img src="https://i.pinimg.com/originals/33/58/d5/3358d53a1888adc3e7d552161dfa84f0.jpg" alt="Loading" />
                                    <h2>John Doe</h2><p> Founder</p>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <img src="https://i.pinimg.com/originals/33/58/d5/3358d53a1888adc3e7d552161dfa84f0.jpg" alt="Loading"  />
                                    <h2>John Doe</h2><p> Founder</p>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <img src="https://i.pinimg.com/originals/33/58/d5/3358d53a1888adc3e7d552161dfa84f0.jpg" alt="Loading"  />
                                    <h2>John Doe</h2><p> Founder</p>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <img src="https://i.pinimg.com/originals/33/58/d5/3358d53a1888adc3e7d552161dfa84f0.jpg" alt="Loading"  />
                                    <h2>John Doe</h2><p> Founder</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    </div>
                </div>
                <div className="center1">
                    <div className="row ">

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div><i className="far fa-clone"></i></div>
                            <div className="number">58249</div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div><i className="far fa-user"></i></div>
                            <div className="number">246K</div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div><i className="far fa-clock"></i></div>
                            <div className="number">1200</div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div><i className="fas fa-expand"></i> </div>
                            <div className="number">846K</div>
                        </div>
                    </div>
                </div>



                <div className="choose">
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <img className="img2" alt="Loading"  src="http://quanaodongphuc.vn/wp-content/uploads/2014/02/ao-somi-nam-MP103149-2.jpg"></img>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <p className="why">Why Choose Us ?</p>
                            <div className="boderchoose"></div>

                            <div className="ttle">
                                <p className="line1"><i className="fa fa-desktop"></i><b className="tech">We use cutting-edge technologies</b></p>
                                <p> Our team of professional analysts is constantly roaming <br />
                                    the web in search of promising techniques, which will <br /> make
                                    your business better
                                </p>
                            </div>

                            <div className="ttle">
                                <p className="line1"><i className="fas fa-calendar-alt"></i><b className="tech">We use cutting-edge technologies</b></p>
                                <p>We know how important it is for you to maintain your <br />
                                    schedule, that's why we do everything to fit it. Our team <br /> works on your
                                    project in multiple threads.
                                </p>
                            </div>
                            <div className="ttle">
                                <p className="line1"><i className="fas fa-headphones-alt"></i><b className="tech">We use cutting-edge technologies</b></p>
                                <p>Our support team is online 24/7, and is ready to help
                                    you <br /> with any design-related issue.
                                </p>
                            </div>

                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    </div>
                </div>
                <div className="line2">
                    <div >
                        <div>
                            <p className="say">What clients Say?</p>
                            <div className="boderline2"></div>
                        </div>
                        <div className="row">
                            <div className="client">
                                {/* 
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div> */}
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                    <div className="row">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <img alt="Loading"  src="https://znews-photo.zadn.vn/w1024/Uploaded/kcwvouvs/2017_10_19/20431295_1417376751648874_6988552230371036840_n.jpg" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <p><b>ALEX MERPHY</b></p>
                                                <p>FREELANCE DEVELOPER</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <img alt="Loading"  src="https://znews-photo.zadn.vn/w1024/Uploaded/kcwvouvs/2017_10_19/20431295_1417376751648874_6988552230371036840_n.jpg" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <p><b>ALEX MERPHY</b></p>
                                                <p>FREELANCE DEVELOPER</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <img alt="Loading"  src="https://znews-photo.zadn.vn/w1024/Uploaded/kcwvouvs/2017_10_19/20431295_1417376751648874_6988552230371036840_n.jpg" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <p><b>ALEX MERPHY</b></p>
                                                <p>FREELANCE DEVELOPER</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div> */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
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
)(AboutUs)