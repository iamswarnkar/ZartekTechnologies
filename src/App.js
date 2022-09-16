import React,{useState} from 'react';
import Child from './Child';
import Users from './Users'
import './App.css';

function App() {
  const [text, setText] = useState('I need to be updated from my child')
  function textChange(value){
    setText(value);
  }
  
  return (
    <>
   <Users/> 
   
   <Child textChange={textChange}/>
      <h4>{text}</h4>
    </>
  );
}

export default App;
