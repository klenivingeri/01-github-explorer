import { useState } from 'react';

export function Counter(){
    let [counter, setCount] = useState(0);

    function increment(){
        setCount(counter + 1);
    }
    return(
        <div>
            <h2>{counter} 1</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}