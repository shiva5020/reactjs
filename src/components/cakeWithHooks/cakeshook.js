import React, { useReducer } from 'react'
import Cakehook2 from './cake2hook'
import Cakehook from './cakehook'
import reducerhook from './reducerhook';

export const CakeContext = React.createContext();

const initialState = {
    numberOfCakes : 10
  };

function Cakeshook() {

  const [count, dispatch] = useReducer(reducerhook, initialState);

    return (
        <CakeContext.Provider 
        value= {{cakeState: count, cakeDispatch: dispatch}}>
            <div>
                <Cakehook />
                <Cakehook2 />
            </div>
        </CakeContext.Provider>
    )
}

export default Cakeshook;
