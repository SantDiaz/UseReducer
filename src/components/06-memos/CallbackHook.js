import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncremente } from './ShowIncremente';



export const CallbackHook = () => {

const [counter, setCounter] = useState(10);

// const increment = ( ) =>{
//   setCounter(counter +  1);
// }

const increment = useCallback( (num) => {
    setCounter( c => c +  num);
  }, [setCounter])


  return (
    <div>
        <h1>CallbackHook : {counter}</h1>
        <hr/>
        <ShowIncremente increment={increment}/>

    </div>
  )
}
