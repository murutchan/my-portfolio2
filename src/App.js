import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
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
          <Experience />
          <Testimonials />
          <ContactForm />
        </main>
        App
      </div>
    </Router>
  );
};

export default App;
