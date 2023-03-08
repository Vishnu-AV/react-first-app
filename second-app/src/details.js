import React from "react";
import Toggle from "./toggle";

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
        <Blog posts={posts} />
        <button onClick={this.activateLasers}>Activate Button</button>
      </>
    );
  }
}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      <h4>About fruits</h4>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Apple", content: "Red in color, very healthy!" },
  { id: 2, title: "Orange", content: "Orange oclor, juicy" },
];
