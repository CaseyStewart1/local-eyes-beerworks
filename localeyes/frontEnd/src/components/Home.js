import React from 'react';
import classicLogo from './images/Local_classic.jpeg';
function Home() {
  return (
    <div className="homePage">
      <div>
        <img src={classicLogo} alt="Local Eyes" height="200px" />
      </div>
      <h1>Local Eyes Beerworks </h1>
      <h3>The city shines in the light of local eyes</h3>
    </div>
  );
}

export default Home;
