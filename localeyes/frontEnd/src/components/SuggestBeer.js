import React, { useState } from 'react';
import axios from 'axios';

function SuggestBeer(props) {
  const [beerState, setBeerState] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setBeerState(beerState);
    console.log('hey');
    axios.post('http://localhost:3001/api/beers', beerState);

    console.log(beerState);
    props.history.push('/beersbeersbeers');
  };

  return (
    <div>
      <h1>Suggest a beer!</h1>
      <form>
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              name: e.target.value
            });
          }}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              style: e.target.value
            });
          }}
          name={'style'}
          placeholder={'style'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setBeerState({
              ...beerState,
              decription: e.target.value
            });
          }}
          name={'description'}
          placeholder={'description'}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SuggestBeer;
