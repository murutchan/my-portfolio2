import React from "react";

const AboutPage = () => {
  return (
    <main className="content float-right">
      <section class="shadow-blue white-bg padding">
        <h3 class="section text-danger">About Me</h3>
        <div class="spacer" data-height="80"></div>

        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-9">
            <h2 class="mt-4 mt-md-0 mb-4 section-title">my journey to IT </h2>
            <div class="spacer" data-height="80"></div>
            <p class="mb-0 text-dark">
              A little about myself. I am an ex taxi driver, ex truck driver and
              ex personal banker. When I see problems, I always think about
              solving it. So I realized that being a software engineer helps a
              lot solving problems and make life easier. At the beginning I
              started out of curiosity. Then slowly but surely I realized that I
              want to become a pro engineer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
