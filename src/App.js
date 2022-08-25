import React from 'react';
import './App.css';
import ToDoApp from './ToDoApp';
import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Header, Footer, Content } = Layout;

const App=()=> {
  return (
    


    <div className="App">
      <Layout>
      <Header>To Do List</Header>
      <Content>
        <ToDoApp></ToDoApp>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    
      
    </div>
  );
}

export default App;
