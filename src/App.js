import React from "react";
import './App.css';
import Counter from './components/counter';

import Cakehook from './components/cakeWithHooks/cakehook';
import Cakehook2 from './components/cakeWithHooks/cake2hook';
import { useReducer } from 'react';
import reducerhook from './components/cakeWithHooks/reducerhook';
import Cakeshook from "./components/cakeWithHooks/cakeshook";
import Pagination from "./components/pagination/pagination";



function App() {
  return (
    
      <div className="App">
        {/* <Counter /> */}
        {/* <UseEffHook /> */}
        {/* <Cakeshook /> */}
        <Pagination />
      </div>
  );
}

export default App;
