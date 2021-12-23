import React from 'react';
import beerGlass from './images/nounBeer.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function BeerPage(props) {
  const [del, setDel] = useState();
  async function deleteBeer(id) {
    await axios.delete(`http://localhost:3001/api/beers/${id}`);
    setDel('Delete Done');
    window.location.reload();
  }
  useEffect(() => {}, [deleteBeer]);

  return (
    <div className="beerPage">
      <div className="beerCardContainer">
        <h1>Crispy Suds on Tap</h1>
        <Link to="/suggestBeer">
          <button>Suggest A beer</button>
        </Link>
        {props.beers.map((beer) => (
          <div className="beerCard">
            <div className="beerCardTitleRow">
              <div className="beerName">
                <h3>{beer.name}</h3>
              </div>
              <div className="beerStyle">
                <p>{beer.style}</p>
              </div>
            </div>
            <div className="beerDescriptor">
              <div className="beerImg">
                <img src={beerGlass} alt={beer.name} height={'200px'} />
              </div>
              <div className="beerDes">
                <p>{beer.description}</p>
              </div>
            </div>
            <div className="beerBottomRow">
              <span>
                <h6>ABV</h6>
                <p>{beer.abv}</p>
              </span>
              <Link to={`/updatebeer/${beer._id}`}>
                <button>Update</button>
              </Link>
              <button
                onClick={() => {
                  deleteBeer(beer._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeerPage;
