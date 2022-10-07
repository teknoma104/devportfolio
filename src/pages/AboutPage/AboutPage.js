import React from 'react';
import ScrollToNext from '../../components/ScrollToNext';
import './style.scss';

const AboutPage = () => {
    return (
        <div className="about-page" style={{ backgroundColor: '#455A64' }}>
            <style jsx="true">
                {`
          .highlight {
            background-color: #374850;
          }
          ::selection {
            background-color: #374850;
          }
        `}
            </style>
            <div className="content-grid">
                <h1 style={{ color: '#FFFFFF' }}>About</h1>
                <div className="about-wrapper">
                    <div className="about-content" style={{ color: '#FAFAFA' }}>
                        <p>
                            I graduated from <a target="_blank" rel="noopener noreferrer" href="https://techbootcamps.smu.edu/" style={{ color: '#3DC0B0' }}>SMU's Coding Boot Camp</a> in 2018 and developed a liking to  <span className="highlight">JavaScript</span> and
                            everything web.
                        </p>
                        <p>
                            Even though I am new to the web development world, I am enjoying my stay here! My recent adventures includes learning about HTML, CSS, Bootstrap, Javascript, jQuery, Node.js, Express, MySQL, MongoDB, and React which lead up to learning about the MERN stack.
                            I had <span className="highlight">AWESOME</span> fellow classmates, TAs and instructors that encouraged my learning at SMU's Coding Boot Camp. Check out my portfolio below for some of the projects I've worked on and uploaded to GitHub. Enjoy your stay! :)
                        </p>
                        <p>
                            This simple landing site was built using React via Facebook's Create-React-App with responsive style using SASS/CSS.
                        </p>
                        <p>
                            In my free time I enjoy gaming with my friends online! Blizzard's Overwatch and Capcom's Monster Hunter World are my current gaming obsession. I also enjoy building Gundam and Zoid models as well as playing ping pong and reading the latest comic book issues. 
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToNext pageSelector=".portfolio-page" />
        </div>
    );
};

export default AboutPage;
