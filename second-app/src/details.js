import React from "react";
import Toggle from './toggle';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.props;
  }
  activateLasers() {
    alert("Button clicked");
  }
  render() {
    return (
      <>
        <p> Child component</p>
        <h2>It is {this.state.name}.</h2>
        <h2>It is {this.state.subject}.</h2>
        <Form />
        <Toggle />
        <button onClick={this.activateLasers}>Activate Button</button>
      </>
    );
  }
}
function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
