import ThemedButton from "./themed-button";

export default function Toolbar(props) {
    return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
  }
  