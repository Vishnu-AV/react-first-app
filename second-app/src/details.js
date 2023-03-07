import React from "react";

export default class Details extends React.Component {
    constructor(props) {
      super(props);
      this.state = props.props;
    }
    
    render() {
      return <><h2>It is {this.state.name}.</h2><h2>It is {this.state.subject}.</h2></>;
    }
  }
