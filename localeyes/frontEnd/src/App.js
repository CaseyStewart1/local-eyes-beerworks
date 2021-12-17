import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import blockLogo from './images/Local_block.jpeg';
import NavGuide from './components/NavGuide';
import Home from './components/Home';
import Find from './components/Find';
import About from './components/About';
import BeerPage from './components/BeerPage';

function App() {
  const beers = [
    {
      name: 'stumptown',
      style: 'Pilsner',
      description: 'Pour-over twee beard stumptown.',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fvectors%2Fbeer-glass-icon-iweb-sign-symbol-logo-label-vector-id527900172%3Fb%3D1%26k%3D6%26m%3D527900172%26s%3D170x170%26h%3DMqOjCfcW3PXEwKbFfhI9pDQwhvPWMHQzQntxfJyceA8%3D&f=1&nofb=1',
      abv: '5%',
      ibu: '40'
    },
    {
      name: 'subway tile',
      style: 'IPA',
      description: 'Gochujang scenester skateboard subway tile.',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fvectors%2Fbeer-glass-icon-iweb-sign-symbol-logo-label-vector-id527900172%3Fb%3D1%26k%3D6%26m%3D527900172%26s%3D170x170%26h%3DMqOjCfcW3PXEwKbFfhI9pDQwhvPWMHQzQntxfJyceA8%3D&f=1&nofb=1',
      abv: '5%',
      ibu: '40'
    },
    {
      name: 'Palo Santo',
      style: 'DIPA',
      description: 'jean shorts synth palo santo truffaut PBR&B',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fvectors%2Fbeer-glass-icon-iweb-sign-symbol-logo-label-vector-id527900172%3Fb%3D1%26k%3D6%26m%3D527900172%26s%3D170x170%26h%3DMqOjCfcW3PXEwKbFfhI9pDQwhvPWMHQzQntxfJyceA8%3D&f=1&nofb=1',
      abv: '7%',
      ibu: '60'
    },
    {
      name: 'ustainable meggings',
      style: 'TIPA',
      description: 'sustainable meggings YOLO jean shorts vice pop-up.',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fvectors%2Fbeer-glass-icon-iweb-sign-symbol-logo-label-vector-id527900172%3Fb%3D1%26k%3D6%26m%3D527900172%26s%3D170x170%26h%3DMqOjCfcW3PXEwKbFfhI9pDQwhvPWMHQzQntxfJyceA8%3D&f=1&nofb=1',
      abv: '9%',
      ibu: '80'
    },
    {
      name: 'Blue bottle',
      style: 'Lager',
      description: 'hell of a blue bottle master cleanse',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fvectors%2Fbeer-glass-icon-iweb-sign-symbol-logo-label-vector-id527900172%3Fb%3D1%26k%3D6%26m%3D527900172%26s%3D170x170%26h%3DMqOjCfcW3PXEwKbFfhI9pDQwhvPWMHQzQntxfJyceA8%3D&f=1&nofb=1',
      abv: '5%',
      ibu: '40'
    },
    {
      name: 'coloring book meditation',
      style: 'Stout',
      description:
        'Pinterest coloring book meditation kickstarter authentic tacos squid. ',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fvectors%2Fbeer-glass-icon-iweb-sign-symbol-logo-label-vector-id527900172%3Fb%3D1%26k%3D6%26m%3D527900172%26s%3D170x170%26h%3DMqOjCfcW3PXEwKbFfhI9pDQwhvPWMHQzQntxfJyceA8%3D&f=1&nofb=1',
      abv: '6%',
      ibu: '30'
    }
  ];
  console.log(beers);

  return (
    <div className="App">
      <header>
        <img src={blockLogo} alt="blockLogo" width="600px" />
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
      </main>
    </div>
  );
}

export default App;
