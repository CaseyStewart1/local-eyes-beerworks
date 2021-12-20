import React from 'react';

function BeerPage(props) {
  return (
    <div className="beerPage">
      <h1>The important things in life...</h1>
      <h3>Whats on tap?</h3>

      <div className="beerCardContainer">
        {props.beers.map((beer) => (
          <div className="beerCard">
            <div className="titleRow">
              <div className="beerName">
                <h3>{beer.name}</h3>
              </div>
              <div className="beerStyle">
                <p>{beer.style}</p>
              </div>
            </div>
            <div className="descriptor">
              <div className="beerImg">
                <img src={beer.img} alt={beer.name} />
              </div>
              <div className="beerDes">
                <p>{beer.description}</p>
              </div>
            </div>
            <div className="bottomRow">
              <div className="beerABV">
                <span>
                  {' '}
                  <h6>ABV</h6>
                  <p>{beer.abv}</p>{' '}
                </span>
              </div>
              <div className="beerIBU">
                <span>
                  <h6>IBU</h6>
                  <p>{beer.ibu}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="educationBP">
          <h1>Tell me more about your Crispy Suds...</h1>
          <div className="leftColumnBP">
            <h2>Ales</h2>
          </div>
          <div className="rightColumnBP">
            <h2>Lagers</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeerPage;

// {props.beers.map((beer) => (
//   <div className="beerCard">
//     <img height={'100px'} src={beer.img} alt={beer.name} />
//     <h3>{beer.name}</h3>
//     <h5>{beer.description}</h5><div className='smallInfo'>
//     <h6>Style</h6>
//       <h6>ABV</h6>
//       <h6>IBU</h6>
//     </div>
//   </div>
