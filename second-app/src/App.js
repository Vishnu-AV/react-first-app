import React from "react";
import "./App.css";
import Details from './details';
import LoginControl from './login'
import Calculator from './temperature-calculator/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    // The only place where we can assign this.state is the constructor.
    this.state = {
      date: new Date(),
      name: "Sir",
      names: ["Sir", "Ma'am"],
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
        subject: props.data,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, {this.state.name}!</h1>
        <span>The time is - {this.state.date.toLocaleTimeString()}.</span>
        <LoginControl />
        <Details props={this.state} />
        <hr />
        <Calculator />
      </div>
    );
  }
}
export default App;
