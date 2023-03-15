import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Toolbar from "./theme/toolbar";

import { ThemeContext } from "./theme/theme-context";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.changeTheme = () => {
      this.props.changeTheme();
    };
  }
  render() {
    let theme = this.context;
    return (
      <>
      <Navbar bg={theme.name} variant={theme.name}>
        <Container>
          <Navbar.Brand href="/">Todo </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/"> List </Link></Nav.Link>
            <Nav.Link ><Link to="todo"> Create New</Link></Nav.Link>
          </Nav>
          <Toolbar changeTheme={this.changeTheme}/>
        </Container>
      </Navbar>
    </>
    );
  }
}
NavBar.contextType = ThemeContext;
export default NavBar;
