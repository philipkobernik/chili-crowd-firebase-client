import React, { Component } from 'react';
import face from './face.gif';
import './App.css';
import firebaseApp from './firebase';
var Rebase = require('re-base');

var base = Rebase.createClass(firebaseApp.database());

class App extends Component {

  constructor() {
    super();
    this.state = {
      filter: '0',
      mod: '0'
    }
    this.changeFilter = this.changeFilter.bind(this);
    this.changeMod = this.changeMod.bind(this);
    this.updateBackground = this.updateBackground.bind(this);
  }

  componentDidMount(){

    base.syncState(`filter`, {
      context: this,
      state: 'filter',
      asArray: false
    });
    base.syncState(`mod`, {
      context: this,
      state: 'mod',
      asArray: false
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateBackground()
  }

  changeFilter(event) {
    event.preventDefault();
    this.setState({
      filter: event.target.value
    });
  }
  changeMod(event) {
    event.preventDefault();
    this.setState({
      mod: event.target.value
    });
  }
  updateBackground() {
    document.body.style = `background-color: RGBA(128, ${this.state.filter}, ${this.state.mod}, 0.5)`;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={face} className="App-logo" alt="logo" />
          <br />
          <p>
            be part of the performance
          </p>

          <div className="slide-container">
            <h2>filter: {this.state.filter}</h2>

            <input type="range" min="0" max="127" className="slider" id="myRange"
            value={this.state.filter}
            onChange={this.changeFilter} />

            <h2>mod: {this.state.mod}</h2>
            <input type="range" min="0" max="127" className="slider" id="modRange"
            value={this.state.mod}
            onChange={this.changeMod} />
          </div>
        </header>

      </div>
    );
  }
}

export default App;
