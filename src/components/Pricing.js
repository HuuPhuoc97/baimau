import React, { Component } from 'react';
import { Button,Image } from 'react-bootstrap';
import { setTitleAction } from 'actions';
import { connect } from 'react-redux'


class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    componentDidMount(){
        this.props.dispatch(setTitleAction("PRICING","Home / Page / Pricing"));
    }
    render() {
        return (
            <div className="pricing">
                <div className="body1">
                    <h1>Choose your Plan </h1>
                    <hr />
                    <p> Pick the best plan that meets your business needs. A free trial is available to help you with the decision-making.</p>
                    <Button className="btn btn-success"><i className="material-icons">file_download</i><p>DOWNLOAD FREE TRIAL</p></Button>
                    <div className="row">
                       
                        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-6">
                        <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <h3>Starter</h3>
                                <div className="price">
                                <b className="dola">$</b>  <b id="number">19 </b>/ month 
                                </div>
                             
                                <hr />
                                <p>The plan is mainly intended for startups and small businesses</p>

                                <ul>
                                    <li><b>5GB</b> Space amount</li>
                                    <li><b>20 </b>User</li>
                                    <li><b>10GB </b>Bandwidth</li>
                                    <li>No support</li>
                                    <li><b>1</b> Database</li>
                                </ul>
                                <Button className="btn btn-primary">BUY NOW</Button>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
                            2wCEAAkGBxATEBATExAVFRUXFxUXFRUXFQ8dGhcYHREWFhUYGBUYHSggGBolGxUVITEhJSkrLj
                            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" ></Image>
                                <h3>Business</h3>
                                <div className="price">
                                <b className="dola">$</b>  <b id="number">59 </b>/ month 
                                </div>
                                <hr />
                                <p>Perfect for Medium-to-large sized businesses</p>

                                <ul>
                                    <li><b>10GB</b> Space amount</li>
                                    <li><b>Unlimited </b>user</li>
                                    <li><b>30GB</b> Bandwidth</li>
                                    <li>Free support</li>
                                    <li><b>20 </b>Databases</li>
                                </ul>
                                <Button className="btn btn-primary">BUY NOW</Button>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <h3>Ultimate</h3>
                                <div className="price">
                                <b className="dola">$</b>  <b id="number">99 </b>/ month 
                                </div>
                                <hr />
                                <p>The plan is best suited for large corporate website</p>

                                <ul>
                                    <li><b>100GB</b> Space amount</li>
                                    <li><b>Unlimited </b>user</li>
                                    <li><b>60GB </b> Bandwidth</li>
                                    <li>Free support</li>
                                    <li><b>Unlimited</b> Database</li>
                                </ul>
                                <Button className="btn btn-primary">BUY NOW</Button>
                            </div>
                        </div>
                           
                        </div>
                        {/* <div className="col-xs-3 col-sm3 col-md-3 col-lg-3"></div> */}
                    </div>
                </div>
                <div className="body2">

                    <div className="bd">
                        <h1>Questions & Answers</h1>
                        <hr />
                        <div className="row">

                            <div className="col-xs-2 col-sm2 col-md-2 col-lg-2"></div>
                            <div className="col-xs-4 col-sm4 col-md-4 col-lg-4">
                                <b> How does the 14-day trial work?</b> <br /><br />
                                <p>Once you decide to opt for any of our plans, you can run a 14-day
                                free trial first. Including all the basic features of each of the offered pricing plans,
                                it will help you decide which features are of the greatest value to you.Once the 14 day
                            period is over,you will be asked to make your choice.</p>
                                <br />
                                <b> My account has expired,can I recover it?</b> <br /><br />
                                <p>If you do not decide to purchase the same or upgrade to a new plan,
                                    your account will expire.You can recover it by buying any of the offered
                                    plans.All data from your personal account will remain intact for ̉ months.If you do
                                    not upgrade till that moment,all data will vanish.
                                 </p>
                                <b> Do you offer discounts for students?</b> <br /><br />
                                <p> We offer student and non-profit discounts.
                                    Just open a private discussion with us,verify
                                    your status and we will provide you with a 20% discount
                                    on any of the provided plans.We may ask you to confirm your
                                    status with documentaion,so please get ready to verify that.</p>
                            </div>
                            <div className="col-xs-4 col-sm4 col-md-4 col-lg-4">
                                <b> What happens at the end of my trial?</b> <br /><br />
                                <p>After the end of your trial,you will automatically pay for the Starter
                             Plan the cheapest of the offered onesĐ.Just in case you do not want to continue or wish to opt for any other plan
                            ,be sure to cancel the subscription before the free trial ends.For more detailed information,contact the support team.</p>
                                <br />
                                <b> Can I change/cancel plans anytime?</b> <br /><br />
                                <p>Yes,you can.Our plans are month-to-month or yearly.You are free
                                to cancel the selected plan anytime you wish.Once you decide to
                                cancel the current plan ,we will not charge you for the next period.
                                As soon as you decide what other plan to opt for,we will contact
                                you for verification.

                                 </p>
                                <b> How do I access my account?</b> <br /><br />
                                <p> If you are having problems with accessing your account,please
                                follow severval quick and easy troubleshooting steps that will help
                                you fix the issue in no time.For example,you can reset your password
                                via email or SMS ,change the username, or whatsover.</p>
                            </div>
                            <div className="col-xs-2 col-sm2 col-md-2 col-lg-2"></div>
                        </div>
                    </div>


                </div>
                <div className="body3">
                    <div className="nd">
                        <h2>Not Sure Which Plan is Right For You?</h2>
                        <p>If you are in doubt of which plan to opt for,subscribe to our newsletter and we will try to help you make the right decision.
                    </p>
                    <Button className="btn btn-success"><i className="far fa-envelope"></i><p> SENT US A LETTER</p></Button>
                    </div>

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
)((Pricing));