import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, buddy!</h1>
        <h2>The time is - {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default App;

