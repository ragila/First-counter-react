import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First Counter React</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    angka: 0
  };

  naik = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };

  turun = () => {
    this.setState({
      angka: this.state.angka - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h2>{this.state.angka}</h2>
        <button onClick={this.naik}>Tambah</button>
        <button onClick={this.turun}>Kurang</button>
      </div>
    );
  }
}
