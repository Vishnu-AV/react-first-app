import React from "react";
export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", address: "", isSenior: null, color: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state)
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
  };

  render() {
    return (
      <form className="regForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea name="address" value={this.state.address} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Is Senior
          <input
            name="isSenior"
            type="checkbox"
            checked={this.state.isSenior}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Color
          <select value={this.state.color} anme="color" onChange={this.handleChange}>
            <option value="grapefruit">Red</option>
            <option value="lime">ORange</option>
            <option value="mango">Yellow</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
