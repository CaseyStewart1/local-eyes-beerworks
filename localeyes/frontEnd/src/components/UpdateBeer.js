import react, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateBeer(props) {
  const [updateBeer, setUpdateBeer] = useState();
  async function changeBeer(id) {
    await axios.put(`http://localhost:3001/api/beers/${id}`);
    setUpdateBeer('changes made');
    // window.location.reload;
  }
  useEffect(() => {}, [changeBeer]);

  return (
    <div>
      <form onSubmit={changeBeer}>
        <input
          type="text-area"
          // value={beer.name}
          onChange={props.handleBeerUpdate}
          name={'name'}
          placeholder={'Name'}
        />
        <input
          type="text-area"
          // value={beer.description}
          onChange={props.handleBeerUpdate}
          description={'description'}
          placeholder={'Description'}
        />
        <input
          type="text-area"
          // value={beer.abv}
          onChange={props.handleBeerUpdate}
          abv="abv"
          placeholder="abv"
        />
        <input
          type="text-area"
          // value={beer.name}
          onChange={props.handleBeerUpdate}
          onTap="onTap"
          placeholder="on tap?"
        />
        <button onCLick={UpdateBeer}>Submit</button>
      </form>
      <h1>here</h1>
    </div>
  );
}

export default UpdateBeer;
