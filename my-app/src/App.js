import "./App.css";
import { Profile } from "./profile";
import { people } from "./sample-data";
import Comment from "./comment"

function App() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <Profile person={person} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (<><ul>{listItems}</ul><Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
    <WelcomeMessage> Here is some message </WelcomeMessage>
</>);
}
function WelcomeMessage({ children }) {
  return (<><p>{children}</p></>)
}
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "John",
  lastName: "honay",
};
const element = (
  <h1 className="greeting" style={{ color: "red" }}>
    Hello, welcome!
  </h1>
);
function tick() {
  return (
    <div>
      <h1>Current time</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
setInterval(tick, 1000);
export default App;
