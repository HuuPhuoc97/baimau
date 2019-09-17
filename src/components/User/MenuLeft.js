import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuUser extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="menuuser list-group">
                <div className="list-group-item">General Managerment</div>
                <Link id="prf" className="list-group-item small" to="/profile"><i className="fas fa-user-alt" />Profile</Link>
                <Link className="list-group-item small" to="/profile"><i className="fas fa-star"></i>Settings</Link>
                <Link id="np"className="list-group-item small" to="/create-new-post"><i className="fas fa-paper-plane"></i>Create New Post</Link>
                <Link className="list-group-item small" to="/profile"><i className="fas fa-share-alt"></i>Social Accounts</Link>
                <Link id="myp" className="list-group-item small" to="/my-post"><i className="far fa-image" />My Posts</Link>
            </div>
        );
    }
}

export default MenuUser;