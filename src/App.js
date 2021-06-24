import React, { Component } from 'react';
import './App.css';
import AddJob from './components/TaskForm';
import Table from './components/Table';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Login from './pages/login';
import Main from './components/main';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tasks : [], //id : unique,name,status
      DisplayForm: false
    }
  }

  onSubmit =(data) =>{
    var randomstring = require('randomstring');
    var {tasks} = this.state;
    data.id = randomstring.generate();
    tasks.push(data);
    this.setState({
      tasks :tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  render() {
    return (
      <SnackbarProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Main/>
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    );
  }
}

export default App;
