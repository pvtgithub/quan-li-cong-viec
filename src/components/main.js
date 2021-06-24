
import Table from './Table';
import AddJob from './TaskForm';

import React, { Component } from 'react';

class main extends Component {
    constructor(props){
        super(props);
        this.state={
          tasks : [], //id : unique,name,status
          DisplayForm: false
        }
      }

    
    openForm = () => {
    this.setState({
        DisplayForm : !this.state.DisplayForm
    });
    }

    closeForm = ()=>{
    this.setState({
        DisplayForm : !this.state.DisplayForm
    });
    }

    render() {
        var {tasks,DisplayForm} = this.state;
        var elmForm = DisplayForm === true ? <AddJob closeForm={this.closeForm} onSubmit = {this.onSubmit}/> : '';
        return (
            <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1><br/>
          </div>
          <div className="row">
            <div className={DisplayForm === true?"col-xs-4 col-sm-4 col-md-4 col-lg-4":''}>
               {elmForm}
            </div>
            <div className={DisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button className="btn btn-primary" onClick={this.openForm}><span className="fa fa-plus mr-5"></span>Thêm Công Việc</button>
              <div className="row mt-15">
              </div>
              <Table tasks={ tasks }/>
            </div>
          </div>
          </div>
        );
    }
}

export default main;