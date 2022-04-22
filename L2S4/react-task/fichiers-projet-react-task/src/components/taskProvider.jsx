import TasksContext from './taskContext.jsx';
import React from 'react';

export default class TasksProvider extends React.Component {
    state = {
        tasks: [],
        doneTasks: []
    };

    render() {
        return (
            <TasksContext.Provider
                value={{
                    tasks: this.state.tasks,
                    doneTasks: this.state.doneTasks
                    ,BA : "BABABABABABABABABABAAAAAAAAAAA"
                }}
            >
                {this.props.children}
            </TasksContext.Provider>
        );
    }
}