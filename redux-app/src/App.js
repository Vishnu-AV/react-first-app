import React from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Todos from "./components/todos";
import DisplayTodos from "./components/todolist";
import { ThemeContext, themes } from "./theme/theme-context";
import ThemedButton from "./theme/themed-button";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo app</h1>
        <section>
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          <ThemedButton />
        </section>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/"> List</Link>
            </li>
            <li>
              <Link to="todo"> Todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todo" element={<Todos />} />
          <Route path="/" element={<DisplayTodos />} />
        </Routes>
      </div>
    );
  }
}

export default App;
