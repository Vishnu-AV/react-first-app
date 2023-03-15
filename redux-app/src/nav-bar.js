import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./theme/theme-context";

class NavBar extends React.Component {
  render() {
    let theme = this.context;
    return (
      <div style={{ color: theme.color, backgroundColor: theme.background }}>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/"> List </Link>
            </li>
            <li>
              <Link to="todo"> Todo</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
NavBar.contextType = ThemeContext;
export default NavBar;
