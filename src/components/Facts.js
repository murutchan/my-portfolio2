import React from "react";

const Facts = () => {
  return (
    <section
      id="facts"
      class="shadow-dark color-white background parallax padding-50"
      data-image-src="images/background-1.jpg"
    >
      <div class="row relative z-1">
        <div class="col-md-3 col-sm-6">
          <div class="fact-item text-center">
            <i class="fas fa-thumbs-up icon-circle"></i>
            <h2 class="count">36</h2>
            <span>Projects completed</span>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="fact-item text-center">
            <i class="fas fa-coffee icon-circle"></i>
            <h2 class="count">2765</h2>
            <span>Cup of coffee</span>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="fact-item text-center">
            <i class="fas fa-smile icon-circle"></i>
            <h2 class="count">12</h2>
            <span>Happy customers</span>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="fact-item text-center">
            <i class="fas fa-pen-fancy icon-circle"></i>
            <h2 class="count">29</h2>
            <span>Posts</span>
          </div>
        </div>
      </div>

      <div class="overlay"></div>
    </section>
  );
};

export default Facts;
