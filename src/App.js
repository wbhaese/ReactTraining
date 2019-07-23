import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class MyButton extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.handleClick(this.props.label);
        }}
      >
        {this.props.label}
      </button>
    );
    //border: 10px;
  }
}

class MyLabel extends Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: ""
    };
  }

  setLabelText = labelText => {
    this.setState({ labelText });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyLabel text={this.state.labelText} />
        </header>

        <MyButton handleClick={this.setLabelText} label="Botão 1" />
        <MyButton handleClick={this.setLabelText} label="Botão 2" />
        <MyButton handleClick={this.setLabelText} label="Botão 3" />
        <MyButton handleClick={this.setLabelText} label="Botão 4" />
      </div>
    );
  }
}

export default App;
