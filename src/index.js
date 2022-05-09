import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./globals/contexts/userContext";
import reportWebVitals from "./reportWebVitals";
import MUImainTheme from "./theme/MuiTheme";
import axios from "axios";
/* 
import dotenv from "dotenv";
dotenv.config();
 */

axios.defaults.baseURL = "https://quantum-asset-backend.herokuapp.com/";

//const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={MUImainTheme}>
    <UserProvider initialValue={{}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </ThemeProvider>,
  document.getElementById("root")
 // rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
