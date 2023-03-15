import React from 'react';
import { Button } from "react-bootstrap";
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Button
        {...props}
        style={{backgroundColor: theme.background, color: theme.color}}
      >Change Theme
      </Button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;