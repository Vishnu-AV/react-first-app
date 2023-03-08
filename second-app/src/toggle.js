import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  deleteRow(id) {
    console.log(id);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);
    const keyListItems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <br />
        <label>List map</label>
        <ul>{listItems}</ul>
        <label>Key mapping</label>
        <ul>{keyListItems}</ul>
        <button onClick={(e) => this.deleteRow("1", e)}>Delete Row</button>
      </>
    );
  }
}
