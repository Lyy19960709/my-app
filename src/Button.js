import React from 'react'
import PropTypes from 'prop-types'

export class Button extends React.Component {
  render () {
    // const text = this.props.text;
    // const show = this.props.onClick;
    const { text, onClick:show } = this.props
    // 模式匹配
    // const { text,show } = this.props
    // const [ text,show ] = [ this.props.text, this.props.onclick ];
    // this.state.text
    // const { text,show } =this.props
    console.log(this.props)
    return (
      <div className="toggle" onClick={show}>{text}</div>
    )
  }
}
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

