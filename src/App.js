import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./app.styles.scss";

const App = () => {
  return (
    <Router>
      <div class="site-wrapper">
        <Navigation />
        <MainPage />
        App
      </div>
    </Router>
  );
};

export default App;
