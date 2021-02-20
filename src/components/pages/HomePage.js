import React from "react";

import MainPage from "../MainPage";
import About from "../About";
import Skills from "../../components/Skills";
import Experience from "../Experience";

import ContactForm from "../ContactForm";
import Facts from "../Facts";
import Process from "../Process";

const HomePage = () => {
  return (
    <main className="content float-right">
      <MainPage />
      <About />
      <Skills />
      <Experience />
      <Facts />
      <Process />

      <ContactForm />
    </main>
  );
};

export default HomePage;
