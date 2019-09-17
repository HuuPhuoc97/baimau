import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setTitleAction, setListOurTeam } from 'actions'
import ListOurTeam from './ListOurTeam'
class OurTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
        this.getOurTeam = this.getOurTeam.bind(this)
    }

    getOurTeam(page = 1, limit = 4) {
        this.props.setListOurTeam(page, limit)
        this.setState({
            active: page
        })
    }

    componentDidMount() {
        this.getOurTeam();
        this.props.setTitle('Our Teams', 'Home / Page / Ourteam')
    }

    showTitle = title => {
        alert(title)
    }

    pagination = () => {
        let items = [];
        for (let number = 1; number <= 6 ; number++) {
            items.push(
                   <Pagination.Item onClick={() => this.getOurTeam(number)} key={number} active={number===this.state.active} >
                   <p> {number} </p>
                 </Pagination.Item>,
            );
        }

        return (
            <div>
                <Pagination>
                <Pagination.First id="pa" onClick={() => this.getOurTeam(this.state.active -1)}/>
                    {items}
                    <Pagination.Last id="pa" onClick={() => this.getOurTeam(this.state.active +1)}/>
                </Pagination>

             


            </div>
        );
    }

    render() {
        let { list } = this.props
        return (
            <div className="OurTeam">
                <div className="container">
                    <h2>Company</h2>
                    <hr />
                    <div className="topnav">
                        <a href="#/">OVERVIEW</a>
                        <a href="#/">SOUL OF AGENCY</a>
                        <a href="#/">TEAM</a>
                        <a href="#/">TESTIMONIALS</a>
                    </div>
                    <div className="row">
                        {list.map(item => (
                            <ListOurTeam key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="Page">
                {this.pagination()}
                    {/* <center>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Item onClick={() => this.getOurTeam(1)}>
                                1
                            </Pagination.Item>
                            <Pagination.Item onClick={() => this.getOurTeam(2)}>
                                2
                            </Pagination.Item>
                            <Pagination.Item onClick={() => this.getOurTeam(3)}>
                                3
                            </Pagination.Item>
                            <Pagination.Item onClick={() => this.getOurTeam(4)}>
                                4
                            </Pagination.Item>
                            <Pagination.Item onClick={() => this.getOurTeam(5)}>
                                5
                            </Pagination.Item>
                            <Pagination.Item onClick={() => this.getOurTeam(6)}>
                                6
                            </Pagination.Item>
                           
                          
                            <Pagination.Last />
                        </Pagination>
                    </center> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.OurTeam.list,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setTitle: (title, breadcumb) => dispatch(setTitleAction(title, breadcumb)),
    setListOurTeam: (page, limit) => dispatch(setListOurTeam(page, limit)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OurTeam)
