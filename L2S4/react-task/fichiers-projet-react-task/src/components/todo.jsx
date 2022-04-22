import React from 'react';
import TaskList from './tasklist.jsx';

import '../assets/style/taskApp.css';
import '../assets/style/toDo.css';

/*
 define root component
*/
export default class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textFilter: ""
    };

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter(event) {
    this.setState({ textFilter: event.target.value });
  }

  render() {
    /// copy of array
    let filteredTasks = Object.assign([], this.props.tasks);

    if (this.state.textFilter != "") {
      filteredTasks = [];
      for (let i = 0; i < this.props.tasks.length; i++) {
        if (this.props.tasks[i].description.includes(this.state.textFilter)) {
          filteredTasks.push(this.props.tasks[i]);
        }
      }
    }


    let sum = 0;

    for (let i = 0; i < filteredTasks.length; i++) {

      if (filteredTasks[i].duration != undefined) {
        sum += filteredTasks[i].duration;
      }

    }


    // sort tasks : filteredTasks

    filteredTasks.sort(function (a, b) {
      return b.priority - a.priority;
    });

    return <div className="ToDO">

      <h3>Tâches en cours</h3>
      <input type="text" id="filter" text="filtre" placeholder="filtre" onChange={this.handleChangeFilter} />
      <p>Il y a {filteredTasks.length} taches en cours. Pour une durée de {sum} min.</p>
      <div>
        <TaskList tasks={filteredTasks} handleCompleteTask={this.props.handleCompleteTask} handleChangePriority={this.props.handleChangePriority} />
      </div>
    </div>
  }
}
