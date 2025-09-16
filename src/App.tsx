
import {useState} from "react";


const App = ()=> {
    let [counter, setCounter] = useState(0);
    console.log("mont");
    return (
        <div>
         <h2>{counter}</h2>
            <button onClick={() =>
                setCounter(counter ++)}>increment
            </button>
            <button onClick={() =>
                setCounter(counter --)}>decrement
            </button>
        </div>
    );
}

export default App

