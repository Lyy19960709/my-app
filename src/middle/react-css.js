import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from '../registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class ExportBar extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'blue',
    };
  }
  
  handleClick = (e) => {
    this.setState({
      backgroundColor: 'yellow'
    });
  }
  
  render() {
    const styles = {
      containerStyle: {
        backgroundColor: this.state.backgroundColor,
      }
    };
    const { containerStyle } = styles;
    return (
      <div className='bg'>
        <button style={containerStyle} onClick={this.handleClick}> {this.props.text} </button>
      </div>
    );
  }
}
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <ExportBar text="ExportBar text" />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);