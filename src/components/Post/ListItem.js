import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import moment from 'moment';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { item } = this.props;
        if (!item) return null;
        return (
            <div className="col-xs-4 col-sm4 col-md-4 col-lg-4" key={item.id}>
            <div className="button">
                {item.categories ? item.categories.map(bt => (
                    
                       <button  className="btn btn-success btn-sm"  key={bt.id} >
                        {bt.name}
                    </button>
                 
                )) : ''}</div>
                <span onClick={() => this.props.goToDetail(item.id)}>
                    <p id="tt">{item.title}</p>
                    <p id="by">

                        {item.user ? <i> <b> by </b> {item.user.name}</i> : ''}
                        <i className="far fa-clock"> </i> {moment(item.created_at).fromNow()}
                    </p>
                </span>
                {item.photo ? <Image src={'http://dev.inlumina.com:8123/' + item.photo.url} /> :
                 <Image src="https://www.topitworks.com/blogs/wp-content/uploads/2018/01/react-native-1024x631.png" />
                 }
               
            </div>
        )
    }
}
export default ListItem;
