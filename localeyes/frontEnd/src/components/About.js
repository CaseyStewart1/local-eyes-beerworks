import React from 'react';
import classicLogo from './images/Local_classic.jpeg';

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutTop">
        <h1> Our Story...</h1>
        <p>
          This project was started many years ago in another form and has
          continually grown since. What started as a way to grow the Mead
          community has expanded and morphed into a way to support one's local
          community.{' '}
        </p>

        <p>
          {' '}
          My idea of community started to come together while hanging out in
          dingy basement shows and dive bars around Boston, MA. You find
          yourself in the front of a house show screaming along with the band,
          locked arm in arm with a complete strangers next to you making sure
          the pit behind you doesn't spill forward and you realize these are the
          times you never want to end. That stranger you were locked with
          becomes your closest friend and those songs you burned your throat out
          screaming along to help get you through the worst times and define the
          best.{' '}
        </p>
        <p>
          Local Eyes is about creating those feelings again and building a
          community around it.
        </p>
      </div>
    </div>
  );
}

export default About;
