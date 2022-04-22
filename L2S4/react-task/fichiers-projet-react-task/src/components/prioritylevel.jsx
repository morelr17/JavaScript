import React from 'react';

import '../assets/style/priorityLevel.css';


export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"level "+this.props.onoff} onClick = {this.props.onClick}>
      </div>
    );
  }
}
