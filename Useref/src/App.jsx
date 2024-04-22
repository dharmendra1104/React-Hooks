import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef } from 'react'
import './App.css'


//What is useRef? -dom Manipulate
//What to do we use


function App() {
 const refElement=useRef("");
 const [name,setName] =useState("DK");
 console.log(refElement.current[0])
 console.log(refElement)
function handleReset(){
  setName("")
  refElement.current.focus()
}
function handleInput(){
  refElement.current.style.color="red"
  refElement.current.style.value="Dharmendra"

}

  return (
    <>
    <h1>Learning UseRef</h1>
    <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleInput}>handle input</button>
    </>
  )
}

export default App
