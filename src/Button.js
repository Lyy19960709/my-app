import React from 'react';

export class Button extends React.Component {
  render () {
    const text = this.props.text;
    const show = this.props.onClick;
    // this.state.text
    return (
      <div className="toggle" onClick={show}>{text}</div>
    )
  }
}


