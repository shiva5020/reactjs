import { useState, useReducer, useContext } from 'react';
import { CakeContext } from './cakeshook';
import reducerhook from './reducerhook';

// const initialState = {
//         numberOfCakes : 10
//     };

const Cakehook = props => {

    // const [count, dispatch] = useReducer(reducerhook, initialState);
    const cakecontext = useContext(CakeContext);
    return (
        <div>
            <h2>Number of cakes - {cakecontext.cakeState.numberOfCakes} </h2>
            <button onClick={() => cakecontext.cakeDispatch({type: "BUY_CAKE"})}>Buy Cake</button>
        </div>
    )
}


export default Cakehook;