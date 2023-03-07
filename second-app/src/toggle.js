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
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={(e) => this.deleteRow('1', e)}>Delete Row</button>
      </>
    );
  }
}
