import React from 'react'
import ReactDOM from 'react-dom'
import { Mask } from './Mask'
import { Button } from './Button'
// import AAA from './Button'
import './middle.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// import Button, { Button2, BUTTON_CLASSNAME } from './Button'
// import { Button2, Button3 } from './Button'
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

export default class Optss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display:"flex",
      text:"残忍离开",
    }
    // this.show = this.show.bind(this)
  }
  // showhide = () => {
  //   if (this.state.display === "flex") {
  //     this.setState({display:"none"})
  //   }
  // }
show = () =>{
    if (this.state.display === "flex") {
      this.setState({
        display: "none",
        text: "要升级吗"
      })
    } else {
      this.setState({
        display: "flex",
        text: "残忍离开"
      })
    }
  }
  render () {
    // const { display, text, show, showhide } = this.props
    // const { display, text, show} = this.state
    // const { onClick } = this.props
    console.log(this.state)
    // console.log(this.props)
    // console.log(this.props.name)
    const { display, text } =this.state
    return (
      <div className = "optss" >
        <Mask display = {display} onClick={this.show} />
        <Button text = {text} onClick={this.show} />
        {/* <Mask display={this.state.display} onClick={this.state.show}/> */}
      </div>
    )
  }
}
// class Mask extends React.Component {
//   render(){
//     return(
//       <div className="opts" style={{ display:this.state.display}}>
//         {/* <Test />  */}
//         {/* <Test2></Test2> */}
//         <div className="pop-up">
//           <div className="rocket"></div>
//           <div className="upgrade"></div>
//           <button className="new" onClick={this.showhide}></button>
//         </div>
//       </div>
//     )
//   }
// }
// const  Close= () => (
//   <div >
//     <Opts />
//     <div className="toggle" onClick={this.show}></div>
//   </div>
// )
ReactDOM.render(
  <Optss />,
  document.getElementById('root')
)