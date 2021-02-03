import { Component } from "react";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      massage: "Welcome",
      count: 0,
    };
  }

  newMassage() {
    this.setState({
      massage: "Thank You !",
    });
  }

  increament() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.massage}</h1>
        <button onClick={() => this.newMassage()}>Subscribe</button>
        <h1>count {this.state.count}</h1>
        <button onClick={() => this.increament()}>Increament</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    );
  }
}

export default App;
