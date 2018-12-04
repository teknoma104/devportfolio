import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import ScrollToPrevious from '../../components/ScrollToPrevious';
import portfolioItems from './portfolio-items';

import './style.scss';

const PortfolioPage = () => {

  return (
    <div className="portfolio-page" style={{ backgroundColor: '#455A64' }}>
      <div className="content-grid">
        <h1 style={{ color: '#FFFFFF' }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: #FFFFFF;
                color: #455A64;
              }
              .portfolio-item a {
                color: #455A64;
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid #455A64;
              }
            `}
          </style>
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

export default PortfolioPage;
