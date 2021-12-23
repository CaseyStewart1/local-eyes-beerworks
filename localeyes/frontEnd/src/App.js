import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import NavGuide from './components/NavGuide';
import Home from './components/Home';
import Find from './components/Find';
import About from './components/About';
import BeerPage from './components/BeerPage';
import UpdateBeer from './components/UpdateBeer';
import SuggestBeer from './components/SuggestBeer';
import Learn from './components/Learn';

import blockLogo from './components/images/Local_block.png';

function App() {
  const [beers, setBeers] = useState([]);
  const [styles, setStyles] = useState([]);
  const [beerData, setBeerData] = useState([]);
  const [newBeer, setNewBeer] = useState({
    name: '',
    style: '',
    decription: ''
  });

  const handleNewBeer = (e) => {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  };

  const addBeer = (e) => {
    e.preventDefault();
    const currentBeers = beerData;
    const addedBeer = {
      ...newBeer,
      id: parseInt(beerData.length + 1)
    };
    currentBeers.push(addedBeer);
    setBeerData(currentBeers);
    setNewBeer({ id: '', name: '', style: '', description: '' });
  };

  useEffect(() => {
    async function getBeers() {
      const res = await axios.get(`http://localhost:3001/api/beers`);
      console.log(res.data.beers);
      setBeers(res.data.beers);
    }
    getBeers();
  }, []);

  useEffect(() => {
    async function getStyles() {
      const res = await axios.get(`http://localhost:3001/api/styles`);
      console.log(res.data.styles);
      setStyles(res.data.styles);
    }
    getStyles();
  }, []);

  return (
    <div className="App">
      <header>
        <img src={blockLogo} alt="blockLogo" width="66%" />
        <NavGuide />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/beersbeersbeers"
          component={(props) => <BeerPage {...props} beers={beers} />}
        />
        <Route exact path="/visit" component={Find} />
        <Route
          exact
          path="/learn"
          component={(props) => <Learn {...props} styles={styles} />}
        />
        <Route
          exact
          path="/suggestBeer"
          component={(props) => (
            <SuggestBeer {...props} beers={beers} addBeer={addBeer} />
          )}
        />
        <Route
          exact
          path="/updatebeer/:id"
          component={(props) => <UpdateBeer {...props} beers={beers} />}
        />
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
}

export default App;
