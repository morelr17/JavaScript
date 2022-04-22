import React from 'react';

import '../assets/style/addtask.css';

import {DEFAULT_PRIORITY} from './taskApp.jsx'
/*
 define root component
*/
export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDescription: "",
      taskDuration: 0,
      taskPriority: DEFAULT_PRIORITY

    };

    this.addTask = this.addTask.bind(this);
  }


  addTask() {

    // we can´t create a task without description
    if (this.state.taskDescription == undefined || this.state.taskDescription == "") {
      return;
    }

    this.props.handleCreateTask({ description: this.state.taskDescription, duration: Number.parseInt(this.state.taskDuration), priority: Number.parseInt(this.state.taskPriority) });

    // re init data
    this.setState({
      taskDescription: "",
      taskDuration: 0,
      taskPriority: DEFAULT_PRIORITY
    });
  }

  render() {
    return (
      <div className="addTask">

        <input
          value={this.state.taskDescription}
          type="text"
          placeholder="description"
          onChange={() => this.setState({ taskDescription: event.target.value })}
        />
        <input
          value={this.state.taskDuration}
          type="number"
          placeholder="10"
          min="0"
          onChange={() => this.setState({ taskDuration: event.target.value })}
        />
        <span>
          min
          </span>
        <br />
        <button onClick={() => this.addTask()}>
          add
          </button>


      </div>

    );
  }
}
