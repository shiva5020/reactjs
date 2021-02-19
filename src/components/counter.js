import {useState} from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>counter : {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>increase</button>
            <button onClick={() => setCounter(counter - 1)}>decrease</button>
        </div>
    )
}

export default Counter;