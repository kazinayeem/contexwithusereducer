import React, { Fragment, useState, useEffect } from "react";

const Getpost = () => {
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState();
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setpost(res.result);
        seterror("");
        console.log(res.result);
      })
      .catch((err) => {
        setLoading(false);
        setpost([]);
        seterror("there was server error");
        console.log(err);
      });
  },[]);

  return (
    <Fragment>
      <h1>api</h1>
      {loading
        ? "loading"
        : post.map((data) => (
            <div>
              <h2>{data.name}</h2>
              <h2>{data.email}</h2>
            </div>
          ))}


          <br />

          {error || null}
    </Fragment>
  );
};

export default Getpost;
