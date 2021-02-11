import React from "react";

import MainPage from "../MainPage";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";
import Testimonials from "../Testimonials";
import ContactForm from "../ContactForm";
import Facts from "../Facts";
import Services from "../Services";

const HomePage = () => {
  return (
    <main className="content float-right">
      <MainPage />
      <About />
      <Skills />
      <Experience />
      <Facts />
      <Services />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default HomePage;
