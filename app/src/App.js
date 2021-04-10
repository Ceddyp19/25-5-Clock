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
    this.setState({ isTimerRunning: !this.state.isTimerRunning })
    this.state.isTimerRunning === true ?  this.pauseTimer(this.intervalId) : this.intervalId = setInterval(() => this.runTimer(), 1000);; 
  }

  pauseTimer = (interval) => {
    clearInterval(interval);
  }


  //helper function to toggleTimer that runs Timer
  runTimer = () => {
    let time = this.state.time,
      minutes = parseInt(time.split(':')[0]),
      seconds = parseInt(time.split(':')[1]),
      updatedMinutes,
      updatedSeconds,
      updatedTime;


    if (minutes === 0 && seconds === 0) return '00:00';


    if (seconds > 0) {
      seconds -= 1

      //when using parseInt, leading zeros are removed.
      //to replace leading zeros we add '0' at the beginning
      //which converts the entire statement back into a string

      if (seconds < 10 && minutes < 10) {

        updatedSeconds = '0' + seconds;
        updatedMinutes = '0' + minutes;

      } else if (seconds < 10 && minutes > 10) {

        updatedSeconds = '0' + seconds;
        updatedMinutes = minutes;

      } else if (seconds < 10 && minutes > 10) {

        updatedSeconds = seconds;
        updatedMinutes = '0' + minutes;

      } else if (seconds > 10 && minutes > 10) {

        updatedSeconds = seconds;
        updatedMinutes = minutes;

      }

    } else if (seconds === 0 && minutes > 0) {
      seconds = 59
      minutes -= 1

      if (minutes < 10) {
        updatedMinutes = '0' + String(minutes);
        updatedSeconds = seconds;
      } else {
        updatedMinutes = minutes;
        updatedSeconds = seconds;
      }
    }

    updatedTime = updatedMinutes + ':' + updatedSeconds
    console.log(updatedTime)
    this.setState({ time: updatedTime })





    // this.state.isTimerRunning === true ? setInterval(function() {console.log('subtract second'); }, 1000) : clearInterval();
    // console.log('subtract second')

    // this.interval = setInterval(function () { console.log('subtract second'); }, 1000)
    // console.log('bow hello!')

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

