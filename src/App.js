import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/layout/Navigation";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./app.styles.scss";

const App = () => {
  return (
    <Router>
      <div class="site-wrapper">
        <Navigation />
        <div class="mobile-header py-2 px-3 mt-4">
          <button class="menu-icon mr-2">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="index.html" class="logo">
            <img src="https://via.placeholder.com/70x70" alt="Bako Doe" />
          </a>
          <a href="index.html" class="site-title dot ml-2">
            Bako Doe
          </a>
        </div>
        App
        <main class="content float-right">
          <section
            class="hero background parallax shadow-dark d-flex align-items-center"
            id="home"
            data-image-src="https://via.placeholder.com/900x600"
          >
            <div class="cta mx-auto mt-2">
              <h1 class="mt-0 mb-4">
                I’m Bako Doe<span class="dot"></span>
              </h1>
              <p class="mb-4">
                He lay on his armour-like back, and if he lifted his head a
                little he could see his brown belly, slightly domed and divided
                by arches into stiff sections.
              </p>
              <a href="#" class="btn btn-default btn-lg mr-3">
                <i class="icon-grid"></i>View Portfolio
              </a>
              <div
                class="spacer d-md-none d-lg-none d-sm-none"
                data-height="10"
              ></div>
              <a href="#" class="btn btn-border-light btn-lg">
                <i class="icon-envelope"></i>Hire me
              </a>
            </div>
            <div class="overlay"></div>
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
