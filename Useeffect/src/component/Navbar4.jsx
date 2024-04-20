import React,{useEffect} from 'react'

const Navbar = ({color}) => {
    // Case 1: run on every render
    useEffect(() => {
      alert("i will run on every render")
    })
  
  
    // Case 2: run only on first render
    useEffect(() => {
      alert("Hey welcome to the page.This is first render")
    }, [])
  
    // Case 3: run only when certain value change
    useEffect(() => {
      alert("hey i am running beacouse color was changed")
    }, [color])
  
  
  return (
    <div>
      I am {color} navbar
    </div>
  )
}
export default Navbar