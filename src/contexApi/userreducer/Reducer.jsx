import React, { useReducer } from "react";
import ComplexCounter from "./ComplexCounter";

const initialState = 0;
export const counterContex = React.createContext();
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "remove":
      return state - 1;

    default:
      return state;
  }
};

export default function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <counterContex.Provider value={{ countdispatch: dispatch }}>
      <div className="text-danger">count  :{count}</div>  
      <ComplexCounter />
      </counterContex.Provider>
    </div>
  );
}
