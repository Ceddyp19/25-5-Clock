import './App.css';
import TimerControl from './components/TimerControl';
import React from 'react';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25
    }
  }


  render() {
    return (
      <div id='container'>
        <div id="App">
          <div id='title'>25 + 5 Clock</div>
          <LengthControl id='break-label' title='Break Length' decrementBtnId='break-decrement' incrementBtnId='break-increment' lengthId='break-length' value={this.state.breakTime} />
          <LengthControl id='session-label' title='Session Length' decrementBtnId='session-decrement' incrementBtnId='session-increment' lengthId='session-length' value={this.state.sessionTime} />
          <Timer />
          <TimerControl />
        </div>
      </div>
    );
  }
}

export default App;
