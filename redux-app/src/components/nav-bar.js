import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Toolbar from "../theme/toolbar";

import { ThemeContext } from "../theme/theme-context";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.changeTheme = () => {
      this.props.changeTheme();
    };
  }
  render() {
    let theme = this.context;
    // sample code for promise
    function getUsers() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
          ]);
        }, 1000);
      });
    }
    function getUser(userId) {
      return new Promise((resolve, reject) => {
          console.log('Get the user from the database.');
          setTimeout(() => {
              resolve({
                  userId: userId,
                  username: 'admin'
              });
          }, 1000);
      })
  }
  
  function getServices(user) {
      return new Promise((resolve, reject) => {
          console.log(`Get the services of ${user.username} from the API.`);
          setTimeout(() => {
              resolve(['Email', 'VPN', 'CDN']);
          }, 3 * 1000);
      });
  }
  
  function getServiceCost(services) {
      return new Promise((resolve, reject) => {
          console.log(`Calculate the service cost of ${services}.`);
          setTimeout(() => {
              resolve(services.length * 100);
          }, 2 * 1000);
      });
  }
    
    const promise = getUsers();
    
    getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);
    
    promise.then((users) => {
      console.log(users);
    });
    return (
      <>
      <Navbar bg={theme.name} variant={theme.name}>
        <Container>
          <Navbar.Brand >Todo </Navbar.Brand>
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
