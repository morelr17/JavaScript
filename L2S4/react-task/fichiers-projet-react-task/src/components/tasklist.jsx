import React from 'react';
import Task from './task.jsx';
import '../assets/style/tasklist.css';

/*
 define root component
*/
export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDescription : "",
      taskDuration : 0,
      taskPriority : 1

      };
  }


  render() {
    const listItems = this.props.tasks
    .map((task) => <Task 
        key={task.id}
        task={task}
        handleCompleteTask={this.props.handleCompleteTask}
        handleChangePriority={this.props.handleChangePriority}
        >
        </Task>);
    
    
    return (
      <div className="tasklist">
        {listItems}
      </div>
    );
  }
}
