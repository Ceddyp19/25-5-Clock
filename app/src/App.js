import './App.css';
import TimerControl from './components/TimerControl';
import React from 'react';
 



class App extends React.Component {
  render(){
  return (
    <div id='container'>
      <div id="App">
        <div id='title'>25 + 5 Clock</div>
        <TimerControl />
      </div>
    </div>
  );
  }
}

export default App;
