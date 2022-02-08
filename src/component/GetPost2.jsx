import React, { useReducer, useEffect } from "react";

const initialstate = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };

    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "there was an error",
      };

    default:
      return state;
  }
};
export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          result: res.result,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
        });
      });
  }, []);
  return (
    <div>
      {state.loading
        ? "loading"
        : state.post.map((data) => (
            <div key={data._id}>
              <h2>{data.name}</h2>
              <h2>{data.email}</h2>
            </div>
          ))}


          {state.error || null}
    </div>
  );
}
