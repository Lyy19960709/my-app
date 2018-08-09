import React from 'react';

export class Mask extends React.Component {
  render(){
  	const display = this.props.display;
  	const showhide = this.props.onClick;
    return(
      <div className="opts" style={{ display:display}}>
        {/* <Test />  */}
        {/* <Test2></Test2> */}
        <div className="pop-up">
          <div className="rocket"></div>
          <div className="upgrade"></div>
          <button className="new" onClick={showhide}></button>
        </div>
      </div>
    )
  }
}