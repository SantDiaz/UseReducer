import React, { useState } from 'react';
import './01-useState/counter.css';



export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2 } = counter ;
    

  return (


    <>
        <h1>COUNTER { counter1 }</h1>
        <h1>COUNTER { counter2 }</h1>
        <hr />
        <button 
        className='btn btn-success btn-block'

        onClick = { () => {
               setCounter({
                   ...counter,                      //trae el valor anterior (counter1 y counter2 ) *SPREAD
                   counter1: counter1 + 1,          //Pisa el valor anterior y agrega un nuevo estado
                   
               });
        }}  >
      
            +1
        </button>


    </>
  )
}
