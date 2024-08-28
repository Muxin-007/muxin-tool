import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import PageLayout from "./layout";
import { BrowserRouter as Router} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
        <PageLayout />
    </Router>
  </React.StrictMode>,
);
