import React from "react";
import "./App.css";
import Details from './details';
import LoginControl from './login'
import Calculator from './temperature-calculator/calculator';
import SignUpDialog from './dialog';
import Gallery from './useState-implement';
import LifeCycle from './lifecycle-example';
import MouseTracker from './render-props';
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
        <LifeCycle />
        <br />
        <h1>Hello, {this.state.name}!</h1>
        <span>The time is - {this.state.date.toLocaleTimeString()}.</span>
        <LoginControl />
        <Details props={this.state} />
        <hr />
        <Calculator />
        <SignUpDialog />
        <hr />
        <Gallery />
        
        <MouseTracker />
      </div>
    );
  }
}
export default App;
