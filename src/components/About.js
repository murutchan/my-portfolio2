import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" class="shadow-blue white-bg padding">
      <h3 class="section-title">About Me</h3>
      <div class="spacer" data-height="80"></div>

      <div class="row">
        <div class="col-md-3">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQG6hbaLDyRkag/profile-displayphoto-shrink_800_800/0/1517810406882?e=1618444800&v=beta&t=qNwKeAH6ClrpxZxrmVN7mfQclb4fLf9GWPuwb1H7GB8"
            alt="about"
            style={{ width: "150px", borderRadius: "50%" }}
          />
        </div>
        <div class="col-md-9">
          <h2 class="mt-4 mt-md-0 mb-4">Helloou,</h2>
          <p class="mb-0">
            A little about myself. I am an ex taxi driver, ex truck driver and
            ex personal banker. When I see problems, I always think about
            solving it. So I realized that being a software engineer helps a lot
            solving problems and make life easier. At the beginning I started
            out of curiosity. Then slowly but surely I realized that I want to
            become a pro engineer.
          </p>
          <div class="row my-4">
            <div class="col-md-6">
              <p class="mb-2">
                Age: <span class="text-dark">30</span>
              </p>
              <p class="mb-0">
                Married: <span class="text-dark">Yes</span>
              </p>
            </div>
            <div class="col-md-6 mt-2 mt-md-0 mt-sm-2">
              <p class="mb-2">
                Hobbies: <span class="text-dark">Soccer, reading, travel</span>
              </p>
              <p class="mb-0">
                Email: <span class="text-dark">murutchan@gmail.com</span>
              </p>
            </div>
          </div>
          <a href="#" class="btn btn-default mr-3">
            <i class="fas fa-download icon-envelope"></i>Resume
          </a>
          <Link to="/about" class="btn btn-alt mt-2 mt-md-0 mt-xs-2">
            <i class="fas fa-angle-double-right icon-envelope"></i>more about me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
