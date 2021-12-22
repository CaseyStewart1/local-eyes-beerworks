import React, { useState } from 'react';
import axios from 'axios';

function SuggestBeer(props) {
  const [beerState, setBeerState] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    props.addBeer(e);
    console.log('Working');
    props.history.push('/beersbeersbeers');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBeerState(beerState);
    // console.log(newBeer);
    axios
      .post('http://localhost:3001/api/beers', beerState)
      .then((res) => {
        console.log(res.data.beers);
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <h1>Suggest a beer!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text-area"
          onChange={props.addBeer}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange=""
          name={'style'}
          placeholder={'style'}
        />
        <input
          type="text-area"
          onChange="{props.handleNewBeer}"
          name={'description'}
          placeholder={'description'}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SuggestBeer;
