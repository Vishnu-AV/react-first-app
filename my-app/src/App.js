import "./App.css";
import { Profile } from "./profile";
import {people} from './sample-data'

function App() {
  const name = "Vishnu";;
      const listItems = people.map(person =>
    <li key={person.id}>
      <Profile person={person}/>
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "John",
  lastName: "honay",
};
const element = (
  <h1 className="greeting" style={{ color: "red" }} >
    Hello, welcome!
  </h1>
);
function tick() {
  return <div>
      <h1>Current time</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
}
setInterval(tick, 1000);
export default App;
