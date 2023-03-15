import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
      navigate("/");
    }
  };
  //console.log("props from store", props);
  return (
    <Container>
      <div className="addTodos">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}
        />

        <button
          className="add-btn btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => add()}
        >
          Add
        </button>
        <br />
      </div>
    </Container>
  );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
