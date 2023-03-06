import "./App.css";
import { Profile } from "./profile";

function App() {
  const name = "Vishnu";
  return (
    <div className="App">
      <p>Hi {name}</p>
      <h1>Hello, {formatName(user)}!</h1>
      {element}
      {tick()}
      <Profile />
    </div>
  );
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
