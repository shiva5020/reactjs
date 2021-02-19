import { useContext, useReducer } from 'react';
import { CakeContext } from './cakeshook';
import reducerhook from './reducerhook';



const Cakehook2 = props => {

    // const [count, dispatch] = useReducer(reducerhook);
    const cakecontext = useContext(CakeContext);

    return (
        <div>
            <h2>Number of cakes - {cakecontext.cakeState.numberOfCakes} </h2>
            <button onClick={() => cakecontext.cakeDispatch({type: "BUY_CAKE"})}>Buy Cake</button>
        </div>
    )
}


export default Cakehook2;