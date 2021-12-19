const db = require('../db');
const Beer = require('../models/beer');

db.on('error', console.error.bind(console.error, ' bad connection'));

const main = async () => {
  const beers = [
    {
      name: 'ABC Golden Lager',
      style: 'Golden Lager',
      abv: '5.1%',
      ibu: '15',
      description:
        'Crisp, malt-forward and flavorful lager.  Light bitterness with a touch of spice, melon, and berry from Saaz and Huell Melon hops.  Very easy drinking.'
    },

    { name: 'Asylum', style: 'DIPA', abv: '8.6%', ibu: '95', description: '' },

    {
      name: 'When Berry Meets Beery',
      style: 'Strawberry Lager',
      abv: '5.1%',
      ibu: '15',
      description:
        'Pours a beautiful pink / ruby red color.  Rich aroma of tart strawberry with a pleasant combination of malt and strawberry flavor.  You will love it.  Like strawberry frosted mini-wheats'
    },

    {
      name: 'Strawbocolate',
      style: 'Chocolate Strawberry Lager',
      abv: '5.1%',
      ibu: '15',
      description:
        'A dark red, almost purple color.  Smells of chocolate covered strawberries and tastes like it too.  A Valentines Day treat.'
    },
    {
      name: 'Bohemian Grove',
      style: 'Czech Pilsner',
      abv: '4.9%',
      ibu: '38',
      description: ''
    },
    {
      name: 'Father Time',
      style: 'Wheat Wine',
      abv: '12.4%',
      ibu: '50',
      description: ''
    },
    {
      name: 'Holiday Ale',
      style: 'Seasonal Spiced Ale',
      abv: '5%',
      ibu: '28',
      description: ''
    },
    {
      name: `It'll be Gooder`,
      style: 'DIPA',
      abv: '8%',
      ibu: '55',
      description: `Pours hazy / honey color with a thick head. Bold aroma of melon and orange zest leads into intense grapefruit, stone fruit, and evergreen.  This DDH Double IPA has a revamped hop bill.  It's a hop head's dream.`
    },
    {
      name: `Dick's Irish Stout`,
      style: 'Dry Irish Stout',
      abv: '4.1%',
      ibu: '32',
      description: `Pours black / deep ruby color with a tight tan head.  Aroma and flavor of coffee, toffee, roasted malts, and dark chocolate.  Light body and soft carbonation contribute to a very drinkable Irish Stout.`
    },
    {
      name: 'Grand Bru',
      style: 'Barrel Aged Belgian Strong Ale',
      abv: '10.4%',
      ibu: '20',
      description: ``
    },
    {
      name: 'Muscles From Brussels',
      style: 'Belgian Strong Ale',
      abv: '8.6%',
      ibu: '30',
      description: `Pours a rich golden color with a slight haze and fluffy head. Classic Belgian character brings a banana ester nose and clove phenols in the flavor along with some malty sweetness.  This Belgian strong ale is deceptively drinkable, but just might roundhouse kick winter in the face!`
    }
  ];
  await Beer.insertMany(beers);
  console.log('poured some beers!');
};
const run = async () => {
  await main();
  db.close();
};

run();

// {name: , style: , abv: , ibu: , description: },
