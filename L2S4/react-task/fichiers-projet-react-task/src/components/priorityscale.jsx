import React from 'react';
import PriorityLevel from './prioritylevel.jsx'

import '../assets/style/priorityScale.css'

import {MIN_PRIORITY_LEVEL, MAX_PRIORITY_LEVEL} from './taskApp.jsx'

/*
 define root component
*/
export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);

    let available  = [];
    for(let i = MIN_PRIORITY_LEVEL;i<=MAX_PRIORITY_LEVEL;i++){
      available[i] = i;
    }
    this.state = {
      availableLevels : available
    };

    
  }

  render() {
    const scale = this.state.availableLevels.map((level) => <PriorityLevel key={level} onClick={() => this.props.handleChangePriority(this.props.task, level)} onoff={level <= this.props.task.priority ? "on" : "off"} />);
    return (
      <div className="scale">
        {scale}({this.props.task.priority})
      </div>
    );
  }
}
