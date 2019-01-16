import React from 'react';
import SocialIcons from '../../components/SocialIcons';
import Nav from '../../components/Nav';
import ScrollToNext from '../../components/ScrollToNext';

import './style.scss';

const LandingPage = () => {

  return (
    <div style={{ backgroundColor: '#455A64' }} className="landing-page">
      <Nav />
      <main style={{ color: '#FFFFFF' }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Tommy!</div>
          <div className="tagline">
            Aspiring Full Stack Dev | Seeker of Knowledge | Video Game & Comic Book Enthusiast
          </div>
          <SocialIcons />
          <div>
            Email:  tommy.minh.le.469@gmail.com
          </div>
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

export default LandingPage;
