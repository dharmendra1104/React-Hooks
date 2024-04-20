import React, { createContext, useContext } from 'react'
import { data } from '../App';
import { data2 } from '../App';

function ChaildC() {
    const name=useContext(data)
    const gender=useContext(data2)
    return (
        <>
            {/* <data.Consumer>
                {
                    (name) => {
                        return (
                            <h1>My Name is {name}</h1>
                        )
                    }
                }
            </data.Consumer> */}
            <h1>I am {name}</h1>
            <h2>Gender is {gender}</h2>
        </>
    )
}
export default ChaildC;
