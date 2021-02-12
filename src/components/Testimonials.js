import React, { useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  useEffect(() => {
    const getGit = async () => {
      const URI =
        "https://api.github.com/users/murutchan/repos?per_page=5&sort=created:asc";

      const gitResponse = await axios.get(URI);
      console.log(gitResponse);
    };
    getGit();
  }, []);

  return (
    <section id="testimonials" class="shadow-blue white-bg padding">
      <h3 class="section-title">Testimonials</h3>
      <div class="spacer" data-height="97"></div>
    </section>
  );
};

export default Testimonials;
