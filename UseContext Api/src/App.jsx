import React, { createContext } from 'react'
import './App.css'
import ChaildA from './component/ChaildA';

const data = createContext();
const data2 = createContext();
function App() {
  const name = "Dharmendra"
  const gender="Male"
  return (
    <>
      <data.Provider value={name}>
        <data2.Provider value={gender}>
          <ChaildA />
        </data2.Provider>
      </data.Provider>
    </>
  )
}

export default App
export { data,data2 };
