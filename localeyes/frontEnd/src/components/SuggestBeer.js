import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SuggestBeer() {
  // const handleSubmit = (e) => {
  //   props.suggestBeer(e);
  //   props.history.push('/beersbeersbeers');
  // };

  const newBeer = props.newBeer;

  return (
    <div className="suggestBeer">
      <h1>Suggestions welcome but no promises we'll listen</h1>
      {/* <form onSubmit={newBeer}>
        <input
          type="text-area"
          value={newBeer.name}
          onChange={props.handleNewBeer}
          name={'name'}
          placeholder={'Name'}
        />
        <input
          type="text-area"
          value={newBeer.style}
          onChange={props.handleNewBeer}
          name={'style'}
          placeholder={'Style'}
        />
        <input
          type="text-area"
          value={newBeer.description}
          onChange={props.handleNewBeer}
          name={'description'}
          placeholder={'Description'}
        />
        <button onClick={newBeer}>Submit</button>
      </form> */}
    </div>
  );
}

export default SuggestBeer;
