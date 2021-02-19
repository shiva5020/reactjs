import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./usefetch";

const UseEffHook= () => {

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${count}`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const [ showHello, setShowHello ] = useState(true);

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
        {showHello && <Hello />}
        <button onClick={() => setCount(c => c + 1)}>increment</button>
        <button onClick={() => setShowHello(!showHello)}>toggle</button> 
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
    </div>
  );
};

export default UseEffHook;