import React from 'react';
import './ToDoApp.css';
import tickIcon from './icons/tick-icon.png'
import logoIcon from './icons/logo.png'
import 'antd/dist/antd.css';
import {Button } from 'antd';
import { connect } from "react-redux";
import { deleteToDos } from './redux/reducer';



const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    deleteToDo: (obj) => dispatch(deleteToDos(obj)),
  };
};


const Item=(props)=> {
  
 console.log("props of Item.js:", props);

  const deleteItem = (id) => {
    console.log("Delete ID:",id)
    props.deleteToDo({
      id:id
    });    

  };
  const [myId, setmyId] = useState(0);


  return (
    <div className='item-frame'>
        <img src={tickIcon} className="App-logo" alt="logo" />
        <p>{props.text}</p>
        
        
        <Button onClick={() => deleteItem(props.id)}>Delete</Button>
    </div>    
  );
}

export default connect(mapStateToProps, mapDispatchToProps)( Item);