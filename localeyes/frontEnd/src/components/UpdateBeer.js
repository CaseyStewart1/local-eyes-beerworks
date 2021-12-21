import react from 'react';

function UpdateBeersPage(props) {
  const handleSubmit = (e) => {
    props.addBeer(e);
    props.history.push;
  };
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text-area"
        value={updateBeer.name}
        onChange={props.handleBeerUpdate}
        name={'name'}
        placeholder={'Name'}
      />
      <input
        type="text-area"
        value={updateBeer.style}
        onChange={props.handleBeerUpdate}
        style={'style'}
        placeholder={'Style'}
      />
      <input
        type="text-area"
        value={updateBeer.description}
        onChange={props.handleBeerUpdate}
        description={'description'}
        placeholder={'Description'}
      />
      <input
        type="text-area"
        value={updateBeer.abv}
        onChange={props.handleBeerUpdate}
        abv="abv"
        placeholder="abv"
      />
      <input
        type="text-area"
        value={updateBeer.name}
        onChange={props.handleBeerUpdate}
        onTap="onTap"
        placeholder="on tap?"
      />
      <button>Submit</button>
    </form>
  </div>
);
