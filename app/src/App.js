import './App.css';
import TimerControl from './components/TimerControl';
import React from 'react';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';
const Audio = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25,
      time: '25:00',
      isTimerRunning: false,
      currentClockShown: 'Session',
      isBreakTimeClockRunning: false
    }
  }

  reset = () => {
    clearInterval(this.intervalId);
    this.setState({
      breakTime: 5,
      sessionTime: 25,
      time: '25:00',
      isTimerRunning: false,
      currentClockShown: 'Session',
      isBreakTimeClockRunning: false
    })
  }

  toggleTimer = () => {
    this.setState({ isTimerRunning: !this.state.isTimerRunning })
    this.state.isTimerRunning === true ? this.pauseTimer(this.intervalId) : this.intervalId = setInterval(() => this.runTimer(), 1000);;
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

    if (minutes === 0 && seconds === 0) {
      this.soundAlarm(Audio);
      // switch timers when one reaches '00:00'
      this.setState({ isBreakTimeClockRunning: !this.state.isBreakTimeClockRunning })

      // convert number to MM:SS time
      if (this.state.isBreakTimeClockRunning === true) {
        let bT = this.state.breakTime
        bT < 10 ? this.setState({ time: `0${bT}:00`, currentClockShown: 'Break' }) : this.setState({ time: `${bT}:00`, currentClockShown: 'Break' })
      } else {
        let sT = this.state.sessionTime
        sT < 10 ? this.setState({ time: `0${sT}:00`, currentClockShown: 'Session' }) : this.setState({ time: `${sT}:00`, currentClockShown: 'Session' })
      }
      return;
    }


    if (seconds > 0 || minutes > 0) {
      // update seconds/minutes
      if (seconds === 0 && minutes > 0) {
        seconds = 59;
        minutes--;
      } else {
        seconds--;
      }
   


      //when using parseInt, leading zeros are removed.
      //to replace leading zeros we add '0' at the beginning
      //which converts the entire statement back into a string

      // format to mm:ss
      if (seconds < 10 && minutes < 10) {

        updatedSeconds = '0' + seconds;
        updatedMinutes = '0' + minutes;

      } else if (seconds < 10 && minutes >= 10) {

        updatedSeconds = '0' + seconds;
        updatedMinutes = minutes;

      } else if (seconds >= 10 && minutes < 10) {

        updatedSeconds = seconds;
        updatedMinutes = '0' + minutes;

      } else if (seconds >= 10 && minutes >= 10) {

        updatedSeconds = seconds;
        updatedMinutes = minutes;

      }

    } 

    updatedTime = updatedMinutes + ':' + updatedSeconds
    this.setState({ time: updatedTime })

  }

  decrementLengthTime = (type) => {
    //becuz my argument is a string, I use bracket notation to access state values
    let breakSessionTime = this.state[type];

    if (breakSessionTime > 1) {
      if (this.state.isTimerRunning === false && type === 'sessionTime') {
           // subtract one from breakSessionTime to counter async javascript
        breakSessionTime > 10 ? this.setState({ time: `${breakSessionTime - 1}:00` }) : this.setState({ time: `0${breakSessionTime - 1}:00` })
      }
      this.setState({ [type]: breakSessionTime - 1 })
    }

  }

  incrementLengthTime = (type) => {
    let breakSessionTime = this.state[type];

    if (this.state[type] < 60) {
      if (this.state.isTimerRunning === false && type === 'sessionTime') {
        // add one to breakSessionTime to counter async javascript
        breakSessionTime > 10 ? this.setState({ time: `${breakSessionTime + 1}:00` }) : this.setState({ time: `0${breakSessionTime + 1}:00` })
      }
      this.setState({ [type]: breakSessionTime + 1 })
    }
  }

  soundAlarm = (src) => {
  
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  
      this.sound.play();
  }

  render() {
    return (
      <div id='container'>
        <div id="App">
          <div id='title'>25 + 5 Clock</div>
          <LengthControl id='break-label' title='Break Length' decrementBtnId='break-decrement' incrementBtnId='break-increment' lengthId='break-length' value={this.state.breakTime} incrementLengthTime={this.incrementLengthTime} decrementLengthTime={this.decrementLengthTime} type='breakTime' />
          <LengthControl id='session-label' title='Session Length' decrementBtnId='session-decrement' incrementBtnId='session-increment' lengthId='session-length' value={this.state.sessionTime} incrementLengthTime={this.incrementLengthTime} decrementLengthTime={this.decrementLengthTime} type='sessionTime' />
          <Timer time={this.state.time} currentClockShown={this.state.currentClockShown} />
          <TimerControl reset={this.reset} toggleTimer={this.toggleTimer} />
        </div>
      </div>
    );
  }
}

export default App;

<audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>