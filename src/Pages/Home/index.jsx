import React from "react";
import { FormattedMessage } from 'react-intl';
// Home.jsx
const Home = () => {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title"><FormattedMessage id="home.title" /></h1>
            <h2 class="subtitle">
            <FormattedMessage id="home.subtitle" />
            </h2>
          </div>
        </div>
      </section>
      <br></br> 

      <div className="card">
        <div className="card-content">
          <p className="title">
          <FormattedMessage id="home.content" />
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
