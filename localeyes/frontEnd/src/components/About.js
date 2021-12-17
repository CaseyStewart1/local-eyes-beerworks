import React from 'react';
import classicLogo from './images/Local_classic.jpeg';

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutTop">
        <h1> Our Story...</h1>
        <p>
          Typewriter tilde 8-bit, raw denim hammock chambray keffiyeh 90's
          coloring book whatever hexagon austin copper mug offal tumblr.
          Brooklyn sriracha listicle, shabby chic woke taiyaki hell of authentic
          marfa. Vape hella before they sold out activated charcoal banh mi
          snackwave flexitarian quinoa. Unicorn beard hashtag letterpress. Cred
          farm-to-table banjo tattooed migas 90's, 3 wolf moon street art
          fingerstache. Dummy text? More like dummy thicc text, amirite?
        </p>
      </div>
      <img src={classicLogo} width="300px" />
    </div>
  );
}

export default About;
