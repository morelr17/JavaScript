import React from 'react';
import AddTask from './addTask.jsx';
import ToDo from './todo.jsx';
import Done from './done.jsx';

import '../assets/style/taskApp.css';

import initialTasks from '../data/tasksData.js'


/// Defrault value for new tasks
export const DEFAULT_PRIORITY = 1;
export const MIN_PRIORITY_LEVEL = 1;
export const MAX_PRIORITY_LEVEL = 6;

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);


    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);

    this.state = {
      tasks: [],
      doneTasks: [],
      nextId: 0
    };
  }


  handleChangePriority(task, newPriority) {

    if (newPriority >= MIN_PRIORITY_LEVEL && newPriority <= MAX_PRIORITY_LEVEL) {
      task.priority = newPriority;
      this.setState(
        {}
      )
    }

  }

  handleCreateTask(task) {
    task.id = "T" + ++this.state.nextId;
    this.setState({
      tasks: [task, ... this.state.tasks],
      nextId: this.state.nextId
    });
  }

  handleCompleteTask(task) {

    // task from tasks list
    let effectiveTask;
    let indexToRemove;
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (task.id == this.state.tasks[i].id) {
        effectiveTask = this.state.tasks[i];
        indexToRemove = i;
        break;
      }
    }


    if (effectiveTask != undefined) {
      // remove task from tasks and put it in doneTasks
      this.state.tasks.splice(indexToRemove, 1);
      this.setState({
        tasks: this.state.tasks,
        doneTasks: [effectiveTask, ... this.state.doneTasks]
      });
    } else {
      console.log("no task found ")
    }
  }

  componentDidMount() {
    for (let i = 0; i < initialTasks.length; i++) {
      if (initialTasks[i].priority == undefined) {
        initialTasks[i].priority = DEFAULT_PRIORITY;
      }
    }

    this.setState({
      tasks: initialTasks,
      nextId: initialTasks.length
    });

  }
  render() {
    //usage of object.assign to create a copy of tasks
    return (
      <div className="taskApp">
        <AddTask handleCreateTask={this.handleCreateTask} />
        <ToDo tasks={Object.assign([], this.state.tasks)} handleCompleteTask={this.handleCompleteTask} handleChangePriority={this.handleChangePriority} />
        <Done tasks={Object.assign([], this.state.doneTasks)} />
      </div>
    );
  }
}
