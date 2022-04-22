import React from 'react';

import '../assets/style/taskApp.css';
import '../assets/style/done.css';
import Task from './task.jsx';
/*
 define root component
*/
export default class Done extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksDisplayed: false
    }
  }

  render() {

    let tasksDisplayed = <div></div>;
    if (this.state.tasksDisplayed) {
      tasksDisplayed = <div> {this.props.tasks.map(task => <Task key={task.id} isDone={true} task={task} />)} </div>;
    }

    return (
      < div className="Done" >
        <h3>Tâches terminées<button onClick={() => this.setState({ tasksDisplayed: !this.state.tasksDisplayed })}>
          +({this.props.tasks.length})</button></h3>

        {tasksDisplayed}
      </div>
    );
  }
}
