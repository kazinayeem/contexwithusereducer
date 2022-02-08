import React from "react";

import { counterContex } from "./Reducer";

export default function ComplexCounter() {
  const countcontex = React.useContext(counterContex);
  return (
    <div>
      <h1>reducer</h1>

      <button
        className="btn btn-primary m-2"
        type="button"
        onClick={() => countcontex.countdispatch("add")}
      >
        ADD
      </button>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => countcontex.countdispatch("remove")}
      >
        REMOVE
      </button>
    </div>
  );
}
