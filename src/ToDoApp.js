import React from 'react';
import './ToDoApp.css';
import addIcon from './icons/add-icon.png'
import logoIcon from './icons/logo.png'
import 'antd/dist/antd.css';
import {Button, Input } from 'antd';
import  { useState } from "react";
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


const ToDoApp=(props)=> {
  console.log( 'props of ToDoApp',props)
  const [todo, setTodo] = useState("");

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
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  
  return (
    <div className='main-frame'>
        <header>
          <img src={logoIcon} className="App-logo" alt="logo" />
          <Input size="large" placeholder="Enter the ToDo item here.."type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}></Input>
          <Button onClick={() => add()}>Add<img src={addIcon}></img></Button>
        </header>
    <div className='sub-frame'>
    <div>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return (
            <div>
              
            <Item text={item.item}></Item>
            </div>)
          })}
      </div>
    </div>
    </div>
    
    
    
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);