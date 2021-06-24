import React, { Component } from 'react';

class Item extends Component {
    
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td></td>
                <td></td>
            </tr>  
        );
    }
}

export default Item;