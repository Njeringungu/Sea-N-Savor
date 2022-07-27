import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./Component/App.css"
import App from "./Component/App";
import "./index.css";
const root= createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App /></BrowserRouter>);



// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// ); 


