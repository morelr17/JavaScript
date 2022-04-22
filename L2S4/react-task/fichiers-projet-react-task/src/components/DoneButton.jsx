import React from 'react';

import '../assets/style/doneButton.css';
/*
 define root component
*/
export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={() => this.props.handleCompleteTask(this.props.task)} className="doneButton">✓</div>
    );
  }
}
