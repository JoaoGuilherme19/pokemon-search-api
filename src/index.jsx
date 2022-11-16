import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import "./styles/submitName.css";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import {Home} from "./services/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
Home();

setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
