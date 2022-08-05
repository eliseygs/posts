import React, {useState} from 'react';

const Counter = function() {
    const[prevState,setCount] = useState(0)

  function increment(){
    setCount (prevState => prevState + 1)
  }

  function decrement(){
    setCount (prevState => prevState - 1)
  }


    return (

        <div>
            <h1>{prevState}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>   
        </div>
    )
}
export default Counter;