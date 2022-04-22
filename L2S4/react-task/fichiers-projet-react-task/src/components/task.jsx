import React from 'react';
import PriorityScale from './priorityscale.jsx';
import DoneButton from './DoneButton.jsx';

import '../assets/style/task.css';

/*
 define root component
*/
export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(this.props.isDone){
      return (
        <div className="task">
          {this.props.task.description} ({this.props.task.duration} min) (priorité : {this.props.task.priority})
        </div>
      );
    }
    else {
      return (
        <div className="task">
          {this.props.task.description} ({this.props.task.duration} min) <PriorityScale task={this.props.task} handleChangePriority={this.props.handleChangePriority}/> <DoneButton task={this.props.task} handleCompleteTask={this.props.handleCompleteTask}/>
        </div>
      );
    }
    
  }
}
