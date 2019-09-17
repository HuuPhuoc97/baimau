import React, { Component } from 'react';

import { setTitleAction } from 'actions';
import { connect } from 'react-redux'


class ContactUs extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.dispatch(setTitleAction("Contact Us","Home / Page / Contact us"));
    }
    render() {
        return (
            <div className="contactus">
                <div className="row">
                    <div className="col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-11 col-sm-3 col-md-3 col-lg-3 infowe">
                        <h1>HOW TO FIND US</h1>
                        <hr />

                        <p>If you have any question, just fill in the contact form, and we will answer you shorly. If you are living nearby, come visit Intense in one of our comfotable offices.</p>
                        <b>BLOG OFFICE 1</b>
                        <p>9863-9867 MILL ROAD, CAMBRIDGE, MG09 99HT.<br />Telephone+1 800 603 6035<br />E-mail: mail@demolink.org</p>
                        <b>BLOG OFFICE 2</b>
                        <p>9870 ST VINICENT PLACE, GLASGOW, DC 45 FR 45.<br />Telephone+1 800 559 6580<br />E-mail: mail@demolink.org</p>

                    </div>
                    <div className="col-xs-11 col-sm-5 col-md-5 col-lg-5 infoyou">
                        <h1>GET IN TOUCH</h1>
                        <hr />

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 name">
                            Name:
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 email">
                            E-Mail:
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="messenge">
                            Messenge:
                            <textarea className="form-control" rows="7"></textarea>
                        </div>
                        <button type="button" className="btn btn-success">SEND</button>
                        <button type="button" className="btn btn-outline-dark buttondark">RESET</button>
                    </div>
                    <div className="col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    title: state.title,
})
export default connect(
    mapStateToProps
)(ContactUs);