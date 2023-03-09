import { sculptureList } from "./const-data.js";
import React from "react";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
    index = 0;

  sculpture = sculptureList[this.index];
  handleClick = () => {
    let rIndex = this.state.index;
    this.setState({ index: rIndex + 1 });
    this.sculpture = sculptureList[this.state.index];
  };
  render() {
    return (
      <>
        <h4>Image Gallery</h4>
        <button onClick={this.handleClick}>Go to Next</button>
        <h2>
          <i>{this.sculpture.name} </i>
          by {this.sculpture.artist}
        </h2>
        <h3>
          ({this.state.index + 1} of {sculptureList.length})
        </h3>
        <img src={this.sculpture.url} alt={this.sculpture.alt} />
        <p>{this.sculpture.description}</p>
      </>
    );
  }
}
