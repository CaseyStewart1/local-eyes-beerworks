import react, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateBeer(props) {
  const id = props.match.params.id;
  console.log(props.match.params.id);
  const [updateBeer, setUpdateBeer] = useState();

  useEffect(() => {
    const useEf = async () => {
      const result = await axios.get(`http://localhost:3001/api/beers/${id}`);
      const beerObject = result.data.beer;
      console.log(beerObject);
      setUpdateBeer(beerObject);
    };
    useEf();
  }, []);

  const handleSubmit = async () => {
    console.log('hey', updateBeer);
    await axios
      .put(`http://localhost:3001/api/beers/${id}`, updateBeer)
      .then((res) => console.log(res.data.beer))
      .catch((error) => alert(error));
    props.history.push('/beersbeersbeers');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              name: e.target.value
            });
          }}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              style: e.target.value
            });
          }}
          name={'style'}
          placeholder={'style'}
        />
        <input
          type="text-area"
          onChange={(e) => {
            setUpdateBeer({
              ...updateBeer,
              description: e.target.value
            });
          }}
          name={'description'}
          placeholder={'description'}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>

      <h1>here</h1>
    </div>
  );
}

export default UpdateBeer;
