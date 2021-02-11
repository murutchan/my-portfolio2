import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Skills from "./components/skills";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./app.styles.scss";

const App = () => {
  return (
    <Router>
      <div class="site-wrapper">
        <Navigation />
        <main className="content float-right">
          <MainPage />
          <About />
          <Skills />
        </main>
        App
      </div>
    </Router>
  );
};

export default App;
