import React from 'react';
import blockLogo from './images/Local_block.png';
import classicLogo from './images/Local_classic.png';
function Home() {
  return (
    <div className="homePage">
      <div className="homeContainer">
        <div className="homeLogo">
          <img src={classicLogo} alt="homeBlockLogo" width="300px" />
        </div>
        <div className="homeBlockOne">
          <div className="homeLeftColumn">
            <h5>TAPROOM HOURS</h5>
            <h6>Monday || CLOSED</h6>
            <h6>Tuesday || 4 - 10pm</h6>
            <h6>Wednesday || 4 - 10pm</h6>
            <h6>Thursday || 4 - 10pm</h6>
            <h6>Friday || 4 - 10pm</h6>
            <h6>Saturday || 4 - 10pm</h6>
            <h6>Sunday || 4 - 10pm</h6>
          </div>
          <div className="homeRightColumn">
            <h3>"The city shines from the light of local eyes"</h3>
            <p>
              Welcome to the neighborhood! We're passionate about building up
              our neighbors and strengthing our community by creating a place
              for all to feel safe and welcome. Beer helps.
            </p>
          </div>
        </div>
        <div className="homeTapPhoto">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farch-elements.com%2Fwp-content%2Fuploads%2F2019%2F10%2FAE-Trailbend-decorative-metals-24.jpg&f=1&nofb=1"
            width="1000vw"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
