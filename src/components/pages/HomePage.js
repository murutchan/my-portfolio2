import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import MainPage from "../MainPage";
import About from "../About";
// import Skills from "../Skills";
import Experience from "../Experience";

import ContactForm from "../ContactForm";
import Facts from "../Facts";
import Process from "../Process";

const HomePage = () => {
  const scrollTo = (n) => {
    return scroll.scrollTo(n);
  };

  useEffect(() => {
    scrollTo(8);
  }, []);
  return (
    <main className="content float-right">
      <MainPage />
      <About />
      {/* <Skills /> */}
      <Experience />
      <Facts />
      <Process />

      <ContactForm />
    </main>
  );
};

export default HomePage;
