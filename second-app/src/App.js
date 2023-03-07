import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // The only place where we can assign this.state is the constructor.
    this.state = {
      date: new Date(),
      name: "Kutta",
      names: ["Kutta", "Potta"],
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState(function (state, props) {
      return {
        date: new Date(),
        name: state.names[this.state.date.getSeconds() % 2],
        counter: props.data,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, {this.state.name}!</h1>
        <h2>The time is - {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default App;
