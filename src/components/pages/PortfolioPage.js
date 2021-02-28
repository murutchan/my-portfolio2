import React from "react";
import nazImg from "../../assets/naz.jpg";
import spyImg from "../../assets/spy.svg";

const PortfolioPage = () => {
  return (
    <main className="content float-right">
      <section className="shadow-blue white-bg padding">
        <h3 className="section-title">Portfolio</h3>
        <div className="spacer" data-height="80"></div>
        <ul className="portfolio-filter list-inline">
          <li className="current list-inline-item" data-filter="*">
            All Projects
          </li>
        </ul>

        <div className="pf-filter-wrapper mb-4">
          <select className="portfolio-filter-mobile">
            <option value="*">Everything</option>
            <option value=".creative">Creative</option>
            <option value=".video">Video</option>
            <option value=".design">Design</option>
            <option value=".branding">Branding</option>
          </select>
        </div>

        <div className="row portfolio-wrapper">
          <div className="col-md-8 col-sm-6 grid-item video">
            <a href="http://nazbar.netlify.app" target="blank">
              <div className="portfolio-item">
                <div className="details">
                  <h4 className="title">E-commerce</h4>
                  <span className="term">Naz bar protein</span>
                </div>
                <span className="plus-icon">Naz bar protein</span>
                <div className="thumb">
                  <img src={nazImg} alt="Portfolio-title" />

                  <div className="mask"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-6 grid-item creative design">
            <h4 className="title">Small Game</h4>
            <p>Its a e-commerce project for my friend's startup with </p>
          </div>

          <div className="col-md-4 col-sm-6 grid-item creative design">
            <a href="http://spygame.netlify.app">
              <div className="portfolio-item">
                <div className="details">
                  <h4 className="title">Small Game</h4>
                  <span className="term">Spy Game</span>
                </div>
                <span className="plus-icon">SPY</span>
                <div className="thumb">
                  <h1>Spy game</h1>
                  <div className="mask"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
