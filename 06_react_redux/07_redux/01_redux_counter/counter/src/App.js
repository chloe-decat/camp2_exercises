import React, { Component } from 'react';
import { createStore } from 'redux';
import store from "./store";
import logo from './logo.svg';


class App extends Component {
  componentDidMount(){
    store.subscribe(() =>
      console.log(store.getState())
    )
  }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          My counter
        </p>
        <button onClick={() => {
          store.dispatch({ type: 'DECREMENT' })
          this.forceUpdate()
        }}>-</button>
          <label>{store.getState()}</label>
        <button onClick={() => {
          store.dispatch({ type: 'INCREMENT' })
      this.forceUpdate()
      }}>+</button>

      </div>
    );
  }

}

export default App;
