import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ParallaxBackground from './components/ParallaxBackground';
import ScrollTop from './components/ScrollTop';
import Theme from './components/Theme';

class App extends Component {
    render() {
        return (
            <div className="dev-landing-page">
                <Theme>
                    <ParallaxBackground />
                    <LandingPage />
                    <AboutPage />
                    <PortfolioPage />
                    <ScrollTop />
                </Theme>
            </div>
        );
    }
}

export default App;
