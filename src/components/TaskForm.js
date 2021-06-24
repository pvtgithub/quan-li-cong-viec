
import React, { Component } from 'react';
import "../App.css";

class AddJob extends Component {
    
    constructor(props){
      super(props);
      this.state ={
        id: '',
        name: '',
        status: false
      }
    }

    closeForm = () =>{
      this.props.closeForm();
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      if(name === 'status'){
        value = target.value === 'true' ? true : false;
      }
      this.setState({
        [name] : value
      })
    }
    onSubmit = (event) =>{
      event.preventDefault();
      this.props.onSubmit(this.state);
    }
    render() {
        return (
          <div className="panel panel-warning">
            <div className="panel-heading">
            <h3 className="panel-title text-center">
              Thêm Công Việc
              <span className="fa fa-times-circle text-right ml100" onClick={this.closeForm}></span>
            </h3>
            </div> 
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên: </label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
                <label>Trạng thái: </label>
                <select className="form-control" name="status" value = {this.state.status} onChange = {this.onChange}>
                  <option value={true}>Kích hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
              </div>
              <div className="text-center">
                <button className="btn btn-warning mr5" >
                  <span className="fa fa-plus "></span>Lưu lại
                </button>
                <button className="btn btn-danger mr5">
                  <span className = "fa fa-close "></span>Hủy bỏ
                </button>
              </div>
            </form>
          </div>
          </div>
        );
    }
}
export default AddJob;