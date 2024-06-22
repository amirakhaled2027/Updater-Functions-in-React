import { useState } from "react";


function UpdaterFunction() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount( c => c + 1);
        setCount( c => c + 1);
        setCount( c => c + 1);
        setCount( c => c + 1);
        setCount( c => c + 1);
    }

    function reset() {
        setCount(0);
    }

    function decrement() {
        setCount( c => c -1)
        setCount( c => c -1)
        setCount( c => c -1)
        setCount( c => c -1)
        setCount( c => c -1)
    }

    return(<div>
             <h1>{count}</h1>
             <button onClick={increment}>Increment</button>
             <button onClick={reset}>Reset</button>
             <button onClick={decrement}>Decrement</button>
            </div>)


}

export default UpdaterFunction