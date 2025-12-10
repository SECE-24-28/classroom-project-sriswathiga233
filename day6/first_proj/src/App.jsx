import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

  //basic syntax of react component
  function App() {
    let [count,setCount]=useState(0);
 function inc(){
  setCount(count+1);
 }
 function dec(){
  setCount(count-1);
 }

  return (
    <>
    <h1>Counter App</h1>
    
    <h2>Count:{count}</h2>
        <button onClick={()=>inc}>"+"</button>
     <button onClick={()=>dec}>"-"</button>
      
    </>
  );
}


export default App
