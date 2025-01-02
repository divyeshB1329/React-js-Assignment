import React, { Component } from "react";

class UpdateUseClcomponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method that logs when the component updates
  componentDidUpdate() {
    console.log(
      `Component updated. Current state: ${this.state.count}`
    );
  }

  // Lifecycle method that logs when the component unmounts
  componentWillUnmount() {
    console.log("Component is unmounting...");
  }

  // Method to increment the counter
  incrementCount = () => {
    this.setState((e) => ({
      count: e.count + 1,
    }));
  };

  render() {
    return (
      <div>&nbsp;&nbsp;
        <h1>&nbsp;&nbsp;&nbsp;Lifecycle Logger</h1><br /><br /><br />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Count: {this.state.count}</p><br /><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{width: "80px", height: "30px"}} onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default UpdateUseClcomponents;
