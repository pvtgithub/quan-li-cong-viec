import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle">
                        Sắp Xếp<span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                </div>
            </div>
        );
    }
}
export default Sort;