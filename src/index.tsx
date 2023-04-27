import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";

const entryElement = document.createElement("div");
document.body.innerText = "";
document.body.style.backgroundColor = "#111";
document.body.appendChild(entryElement);

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  entryElement
);
