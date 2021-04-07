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
      sessionTime: 25,
      time: '25:00',
      isTimerRunning: false
    }
  }

  reset = () => {
    console.log('reset time')
    this.setState({
      breakTime: 5,
      sessionTime: 25,
      time: '25:00'
    })
  }

  toggleTimer = () => {
    console.log('start stop timer')

    this.setState({ isTimerRunning: !this.state.isTimerRunning })

    this.state.isTimerRunning === true ? this.runTimer() : this.pauseTimer();


  }
  //helper function to toggleTimer that runs Timer
  runTimer = () => {
    // this.state.isTimerRunning === true ? setInterval(function() {console.log('subtract second'); }, 1000) : clearInterval();
    // console.log('subtract second')
 
   setInterval(function () { console.log('subtract second'); }, 1000)
  }

  pauseTimer = () => {
    clearInterval();
  }

  decrementLengthTime = (type) => {
    //becuz my argument is a string, I use bracket notation to access state values
    if (this.state[type] > 1) {
      console.log('decrement', this.state[type])
      this.setState({ [type]: this.state[type] - 1 })
    }

  }

  incrementLengthTime = (type) => {
    if (this.state[type] < 60) {
      console.log('increment')
      this.setState({ [type]: this.state[type] + 1 })
    }
  }

  render() {
    return (
      <div id='container'>
        <div id="App">
          <div id='title'>25 + 5 Clock</div>
          <LengthControl id='break-label' title='Break Length' decrementBtnId='break-decrement' incrementBtnId='break-increment' lengthId='break-length' value={this.state.breakTime} incrementLengthTime={this.incrementLengthTime} decrementLengthTime={this.decrementLengthTime} type='breakTime' />
          <LengthControl id='session-label' title='Session Length' decrementBtnId='session-decrement' incrementBtnId='session-increment' lengthId='session-length' value={this.state.sessionTime} incrementLengthTime={this.incrementLengthTime} decrementLengthTime={this.decrementLengthTime} type='sessionTime' />
          <Timer time={this.state.time} />
          <TimerControl reset={this.reset} toggleTimer={this.toggleTimer} />
        </div>
      </div>
    );
  }
}

export default App;
