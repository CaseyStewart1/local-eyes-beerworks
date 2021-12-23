import React from 'react';
import beerGlass from './images/nounBeer.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Learn(props) {
  console.log(props.styles);
  return (
    <div className="learnPage">
      <h2>Two types of Beer but many styles</h2>
      <div className="learnIntro">
        <div className="learnLeft">
          <h3>Ales</h3>
          <p>
            Ales are made with top-fermenting yeasts that work at warmish
            temperatures; They're richer/more full-flavored beers that include
            pale ales (like Sierra Nevada) and everything else that isn't golden
            and clear
          </p>
        </div>
        <div className="learnRight">
          <h3>Lagers</h3>
          <p>
            lagers are made with bottom-fermenting yeasts that need the liquid
            they are fermenting to be cold and still for a longish time. Thats
            why lagers are called lagers — it comes from the German word
            “lagern,” which means “to store.” Lagers were originally fermented
            in caves in cold months and drunk in the spring, when the weather
            warmed up and the yeast was done with its job.
          </p>
        </div>
      </div>
      {props.styles.map((style) => (
        <div className="learn">
          <div className="learnContainer">
            <div className="learnTop">
              <h3>{style.style}</h3>
              <p>{style.type}</p>
            </div>
            <div className="description">
              <p>{style.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Learn;
