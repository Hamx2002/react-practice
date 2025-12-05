import "./styles.css";

import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <>
      <h1 className="advice">{advice}</h1>
      <button className="btn" onClick={getAdvice}>
        click me for advice
      </button>
      <p className="answer">
        1&2.diffing is an algorithm used in reconsiliation which basically looks
        for changes even tiniest bit in virtual DOM and updates it to real DOM
        in js engine of respected browser. ie.. v8 engine in chrome
        <br />
        <br />
        3.react is the frontend library of javascript for building user
        interfaces and also it is component based and state driven library
        created by jordan walke
        <br />
        <br />
        4.transpiler converts from a version or language of program to another
        version or another language of code which compatiblr for the machine or
        compiler. eg. babel is used to convert es6 js to es5+ or below for older
        browsers and it is also used in react to convert jsx to js
        <br />
        <br />
        5.compiler turns compiles the source code to portable file which is
        machine and can executed any time after the compilation
      </p>
    </>
  );
}
