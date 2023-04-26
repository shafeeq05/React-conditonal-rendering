import Home from './Home'
import './App.css'
import Login from './Login'
import { useState } from 'react'


function App(props) {
const [state,setState]=useState(true)
console.log(props.state);
function fun(){
setState(false)
}
  return (
    <>
    <button onClick={fun}>switch</button>
     
     {state?<Login/>:<Home/>}
    
    </>
  )
}


export default App
