/**
 * index.js
 * 
 * This is the entry point of the React application.
 * It imports the main App component and renders it into the root div in index.html.
 * React.StrictMode is used to highlight potential problems in the application during development.
 * 
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
