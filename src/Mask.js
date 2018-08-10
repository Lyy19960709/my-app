import React from 'react'
import PropTypes from 'prop-types'

export class Mask extends React.Component {
  render(){
   // const display = this.props.display;
   // const show = this.props.onClick;
   const { display, onClick:show } = this.props
    // const { display, show} = this.props
    // console.log(this.state)
    console.log(this.props)
    return(
      <div className="opts" style={{ display:display }}>
        {/* <Test />  */}
        {/* <Test2></Test2> */}
        <div className="pop-up">
          <div className="rocket"></div>
          <div className="upgrade"></div>
          <button className="new" onClick={show}></button>
        </div>
      </div>
    )
  }
}
Mask.propTypes = {
  display: PropTypes.string,
  onClick: PropTypes.func
}