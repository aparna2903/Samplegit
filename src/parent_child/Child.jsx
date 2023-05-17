import React from "react";

export default function Child(props) {
  return (
    <>
      <h1>{props.msg}</h1>
      <button
        onClick={() => {
          props.handleChange("hi from child");
        }}
      >
        Click here
      </button>
    </>
  );
}
