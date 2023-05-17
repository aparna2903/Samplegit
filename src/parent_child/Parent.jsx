import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [msg, setMsg] = useState("Hi from Parent");

  function handleChange(msg) {
    setMsg(msg);
  }

  return (
    <div>
      <h1>{msg}</h1>
      <Child handleChange={handleChange} />
    </div>
  );
}
