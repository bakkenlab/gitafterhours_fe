import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name={'luke'}/>
        <Welcome name={'bob'}/>
        <Welcome name={'bakken'}/>
      </div>
    );
  }
}

export default App;
