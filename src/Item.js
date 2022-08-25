import React from 'react';
import './ToDoApp.css';
import tickIcon from './icons/tick-icon.png'
import logoIcon from './icons/logo.png'
import 'antd/dist/antd.css';
import {Button, Input } from 'antd';



const Item=(props)=> {
  return (
    <div className='item-frame'>
        <img src={tickIcon} className="App-logo" alt="logo" />
        <p>{props.text}</p>
        
        
        <Button>Delete</Button>
    </div>    
  );
}

export default Item;