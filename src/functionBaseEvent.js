import React from "react";

function functionBaseEvent() {
  function helloWhorld() {
    console.log("Hello ,Thanks for Clicking");
  }
  return (
    <div>
      <button onClick={helloWhorld}>Click Me</button>
    </div>
  );
}

export default functionBaseEvent;
