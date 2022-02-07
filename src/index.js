import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export default function index() {
  return (
    <>
      <App />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));