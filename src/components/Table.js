import React, { Component } from 'react';
import Item from './Item';

class Table extends Component {
    render() {
        var {tasks} = this.props;
        var {elmTasks} = tasks.map((task , index) => {  
            return <Item key= {tasks.id} index={index} tasks={tasks}/>
        });
        return (
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {elmTasks}
                </tbody>
              </table>
            </div>  
            </div>
        );
    }
}

export default Table;