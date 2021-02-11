import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./app.styles.scss";

const App = () => {
  return (
    <Router>
      <div class="site-wrapper">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/experience" component={ExperiencePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
