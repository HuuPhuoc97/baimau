import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class ListOurTeam extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        let { item } = this.props;
        if (!item) return null;
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={item.id}>
                {item.photo ?
                    <Image src={'http://dev.inlumina.com:8123/' + item.photo.url} rounded />
                    : ''}
                <h4>{item.name}</h4>
                <span><p><i className="fas fa-phone-volume" />
                    {" " + item.phone}</p> </span>
                <span> <p><i className="far fa-envelope-open" />
                    {" " + item.email}</p></span>
            </div>
        )
    }
}
export default ListOurTeam;