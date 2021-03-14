import React from "react";
import nazImg from "../../assets/naz.jpg";
import groupGame from "../../assets/group-game.jpg";
import clothingStore from "../../assets/clothing-store.jpg";

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

        <div className="row portfolio-wrapper">
          <div className="col-md-6 mx-auto col-sm-12 grid-item video mt-5">
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
          <div className="col-md-6 col-sm-6 grid-item creative design">
            <a href="http://nazbar.netlify.com">
              {" "}
              <h4 className="title text-primary">www.nazprotein.com(beta)</h4>
            </a>
            <p>
              Its a fullstack e-commerce website for a startup. Customer's can
              buy product on the website, owner has a dashboard where he can
              manage products, sales, discounts etc .<br />
              <strong>Frontend</strong>: React, Redux, axios, StripeCheckout,
              Bootstrap,SASS. <br></br>
              <strong>Backend:</strong> Node, express, mongodb, jwt, bcrypt
            </p>
          </div>
        </div>
        <div className="row portfolio-wrapper">
          <div className="col-md-6 mx-auto col-sm-12 grid-item video mt-5">
            <a href="http://spygame.netlify.app" target="blank">
              <div className="portfolio-item">
                <div className="details">
                  <h4 className="title">Spygame</h4>
                  <span className="term">group game</span>
                </div>
                <span className="plus-icon">Spy</span>
                <div className="thumb">
                  <img src={groupGame} alt="Portfolio-title" />

                  <div className="mask"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-6 grid-item creative design">
            <a href="http://spygame.netlify.com">
              {" "}
              <h4 className="title text-primary">Spy Game</h4>
            </a>
            It's a small game for groups up to 10-12 people. I made this game
            for my friends. We have dinners every 3 weeks, so I thought we need
            a game where we could just sit and play. This game gives us a lot of
            laughters and joy. <br />
            <span className="text-dark"> You can try... :)</span>
          </div>
        </div>
        <div className="row portfolio-wrapper">
          <div className="col-md-6 mx-auto col-sm-12 grid-item video mt-5">
            <a href="http://askarclothingstore.netlify.app" target="blank">
              <div className="portfolio-item">
                <div className="details">
                  <h4 className="title">Clothing-store</h4>
                  <span className="term">E-commerce</span>
                </div>
                <span className="plus-icon">Spy</span>
                <div className="thumb">
                  <img src={clothingStore} alt="Portfolio-title" />

                  <div className="mask"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-6 grid-item creative design">
            <a href="http://askarclothingstore.netlify.app">
              {" "}
              <h4 className="title text-primary">Clothing Store</h4>
            </a>
            Its a mockup clothing store website. I implemented simple
            authentication with Google Sign in and Firebase. I used redux to
            manage cart items and store list.
            <br />
            <strong>Frontend</strong>: React, Redux,Redux persist, react hooks
            ,axios, Bootstrap,SASS, Javascript <br></br>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
