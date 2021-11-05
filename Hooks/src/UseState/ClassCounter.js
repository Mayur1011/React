import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  incrementCounterPrev = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <div>Count : {this.state.counter}</div>
        <button onClick={this.incrementCounter}> Increment </button>
      </div>
    );
  }
}

export default ClassCounter;
