import React, { useMemo, useReducer, useState } from "react";
import RegisterForm from "./register-form";

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="loginContainer">
        <h3>Register</h3>
        <RegisterForm />
        <hr />
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {!isLoggedIn && <a>forgot password?</a>}
      </div>
    );
  }
}
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return (
      <>
        <UserGreeting />
        <WarningBanner warn={isLoggedIn} />
      </>
    );
  }
  return (
    <>
      <GuestGreeting />
      <WarningBanner warn={isLoggedIn} />
    </>
  );
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function reducer(state, action) {
  return (state = action.name);
}
function WarningBanner(props) {
  const [name, dispatch] = useReducer(reducer, "Login");
  const [count, setCount] = useState(20);
  const expensiveCount = useMemo(() => {
    return count ** 3;
  },[count])
  // if (!props.warn) {
  //   return null;
  // }
  return (
    <div className="warning">
      Warning!
      <p> count {count} -- {expensiveCount}</p>
      <button onClick={() => dispatch({ name: "Signup" })}>{name}</button>
    </div>
  );
}
