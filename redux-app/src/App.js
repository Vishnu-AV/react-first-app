import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todos from "./components/todos";
import DisplayTodos from "./components/todolist";
import { ThemeContext, themes } from "./theme/theme-context";
import ThemedButton from "./theme/themed-button";
import NavBar from "./nav-bar";
import Toolbar from "./theme/toolbar";

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
        <ThemeContext.Provider value={this.state.theme}>
          <NavBar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Routes>
          <Route path="/todo" element={<Todos />} />
          <Route path="/" element={<DisplayTodos />} />
        </Routes>
      </div>
    );
  }
}

export default App;
