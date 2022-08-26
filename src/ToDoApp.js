import React from 'react';
import './ToDoApp.css';
import addIcon from './icons/add-icon.png'
import logoIcon from './icons/logo.png'
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from './redux/reducer';
import Item from './Item';




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


const ToDoApp = (props) => {
  console.log('props of ToDoApp', props)
  const [todo, setTodo] = useState("");

  const addItem = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: props.todos.length,
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };


  const inputChanged = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className='main-frame'>
      <header>
        <img src={logoIcon} className="App-logo" alt="logo" />
        <Input size="large" placeholder="Enter the ToDo item here.." type="text"
          onChange={(e) => inputChanged(e)}
          className="todo-input"
          value={todo}></Input>
        <Button onClick={() => addItem()}>Add<img src={addIcon} alt='icon'></img></Button>
      </header>
      <div className='sub-frame'>
        <div>
          {props.todos.length > 0 &&
            props.todos.map((item, key) => {
              return (
                <div>
                  <Item text={item.item} id={key}></Item>
                </div>)
            })}
        </div>
      </div>
    </div>



  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);