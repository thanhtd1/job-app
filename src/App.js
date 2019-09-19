import React, { Component} from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [] // id, name, status
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
    if(localStorage && localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  onGenerateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'thanhtd',
        status: true
      },
      {
        id: this.generateID(),
        name: 'manhtd',
        status: false
      },
      {
        id: this.generateID(),
        name: 'thanhtd9',
        status: true
      }
    ]
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
   
  }

  rand() {
    return Math.floor((1 + Math.random())* 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.rand() + this.rand() + '-' + this.rand();
  }

  render() {
    const {tasks} = this.state;
    return (
      <div className="container">
        <div className="text-center">
            <h1>Your Work Management</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
             <TaskForm/>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Add your work
                </button>
                &nbsp;
                <button type="button"
                        className="btn btn-danger"
                        onClick={this.onGenerateData}>
                    Generate data
                </button>
                <Control/>
                <TaskList tasks={tasks}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
