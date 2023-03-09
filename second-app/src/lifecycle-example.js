import React from "react";

export default class LifeCycle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      points: 10,
      value : 'name'
    };
    console.log("inside constructor" + this.state.points);
    // this.handlePoints = this.handlePoints.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return {
      points: 1000,
    };
  }
  static shouldComponentUpdate (props, state) {
    console.log("inside shouldComponentUpdate" + this.state.points);
    return true;
  }
  componentDidMount() {
    console.log("inside componentDidMount" + this.state.points);
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log("inside componentDidUpdate" + this.state.points);
  }
  componentWillUnmount() {
    console.log("inside componentWillUnmount" + this.state.points);
  }
  updateValue = (e) => {
    this.setState({value: e.target.value});
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevState.value !== this.state.value) {
      return this.state.value;
    }
    return null;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p>{this.state.value}</p>
          <p>You've scored {this.state.points} points.</p>
          <input onChange={this.updateValue} type='text'></input>
        </header>
      </div>
    );
  }
}
