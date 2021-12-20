const db = require('../db');
const Beer = require('../models/beer.js');

db.on('error', console.error.bind(console.error, ' bad connection'));

const main = async () => {
  const beers = [
    {
      name: 'ABC Golden Lager',
      style: 'Golden Lager',
      abv: '5.1%',
      ibu: '15',
      onTap: true,
      description:
        'Crisp, malt-forward and flavorful lager.  Light bitterness with a touch of spice, melon, and berry from Saaz and Huell Melon hops.  Very easy drinking.'
    },

    {
      name: 'Asylum',
      style: 'DIPA',
      abv: '8.6%',
      ibu: '95',
      onTap: false,
      description: ''
    },

    {
      name: 'When Berry Meets Beery',
      style: 'Strawberry Lager',
      abv: '5.1%',
      ibu: '15',
      onTap: true,
      description:
        'Pours a beautiful pink / ruby red color.  Rich aroma of tart strawberry with a pleasant combination of malt and strawberry flavor.  You will love it.  Like strawberry frosted mini-wheats'
    },

    {
      name: 'Strawbocolate',
      style: 'Chocolate Strawberry Lager',
      abv: '5.1%',
      ibu: '15',
      onTap: true,
      description:
        'A dark red, almost purple color.  Smells of chocolate covered strawberries and tastes like it too.  A Valentines Day treat.'
    },
    {
      name: 'Bohemian Grove',
      style: 'Czech Pilsner',
      abv: '4.9%',
      ibu: '38',
      onTap: false,
      description: ''
    },
    {
      name: 'Father Time',
      style: 'Wheat Wine',
      abv: '12.4%',
      ibu: '50',
      onTap: false,
      description: ''
    },
    {
      name: 'Holiday Ale',
      style: 'Seasonal Spiced Ale',
      abv: '5%',
      ibu: '28',
      onTap: false,
      description: ''
    },
    {
      name: `It'll be Good`,
      style: 'DIPA',
      abv: '8%',
      ibu: '55',
      onTap: true,
      description: `Pours hazy / honey color with a thick head. Bold aroma of melon and orange zest leads into intense grapefruit, stone fruit, and evergreen.  This DDH Double IPA has a revamped hop bill.  It's a hop head's dream.`
    },
    {
      name: `Dick's Irish Stout`,
      style: 'Dry Irish Stout',
      abv: '4.1%',
      ibu: '32',
      onTap: true,
      description: `Pours black / deep ruby color with a tight tan head.  Aroma and flavor of coffee, toffee, roasted malts, and dark chocolate.  Light body and soft carbonation contribute to a very drinkable Irish Stout.`
    },
    {
      name: 'Grand Bru',
      style: 'Barrel Aged Belgian Strong Ale',
      abv: '10.4%',
      ibu: '20',
      onTap: false,
      description: ``
    },
    {
      name: 'Muscles From Brussels',
      style: 'Belgian Strong Ale',
      abv: '8.6%',
      ibu: '30',
      onTap: true,
      description: `Pours a rich golden color with a slight haze and fluffy head. Classic Belgian character brings a banana ester nose and clove phenols in the flavor along with some malty sweetness.  This Belgian strong ale is deceptively drinkable, but just might roundhouse kick winter in the face!`
    },
    {
      name: `Now It's a Blonde`,
      style: 'Blonde Ale',
      abv: '4.6%',
      ibu: '15',
      onTap: false,
      description: ``
    },
    {
      name: `Summer Solstice`,
      style: 'Gose',
      abv: '4.7%',
      ibu: '8',
      onTap: false,
      description: ``
    },
    {
      name: `Sun Medallion`,
      style: 'Dry Hopped Saison',
      abv: '5.2%',
      ibu: '30',
      onTap: false,
      description: ``
    },
    {
      name: `Wutang Sour`,
      style: 'Tangerine Sour',
      abv: '6.2%',
      ibu: '4',
      onTap: false,
      description: `Hazy Kettle Sour with a heavy dose of tangerine puree added near the end of fermentation.  Tart, citrusy, and refreshing!`
    },
    {
      name: `Deep Sea Downeast`,
      style: 'Coffee Stout',
      abv: '5.7%',
      ibu: '54',
      onTap: false,
      description: ``
    },
    {
      name: `Drop it`,
      style: 'Dry Hopped Blonde Ale',
      abv: '5%',
      ibu: '18',
      onTap: false,
      description: ``
    },
    {
      name: `From The Isle`,
      style: 'Irish Re Ale',
      abv: '7.7%',
      ibu: '25',
      onTap: false,
      description: ``
    },
    {
      name: `Goat Ribs`,
      style: 'Doppelbock',
      abv: '7.7%',
      ibu: '20',
      onTap: false,
      description: ``
    },
    {
      name: `Pale Moonlight`,
      style: 'hefeweizen',
      abv: '5.1%',
      ibu: '12',
      onTap: false,
      description: ``
    },
    {
      name: `Our Own Private Idaho`,
      style: 'Amber Lager',
      abv: '5%',
      ibu: '15',
      onTap: false,
      description: ``
    },
    {
      name: `Pink Pants`,
      style: 'DIPA',
      abv: '7.7%',
      ibu: '51',
      onTap: false,
      description: ``
    },
    {
      name: `Riser 7`,
      style: 'Dry Hopped Lager',
      abv: '4.5%',
      ibu: '40',
      onTap: false,
      description: ``
    },
    {
      name: `Spruced UP!`,
      style: 'Spruce Pale Ale',
      abv: '5.7%',
      ibu: '60',
      onTap: false,
      description: ``
    },
    {
      name: `Isle of White`,
      style: 'White IPA',
      abv: '6.7%',
      ibu: '45',
      onTap: true,
      description: `A delightful mash up of styles - the floral and citrus hoppy notes of an IPA and the coriander and orange peel associated with witbeers.  Pours pale and moderately hazy with a full white head.  A soft mouthfeel from a generous additon of Wheat malt make this IPA very approchable to a variety of beer lovers`
    },
    {
      name: `Fest`,
      style: 'Festbier',
      abv: '6.25%',
      ibu: '28',
      onTap: false,
      description: ``
    },
    {
      name: `Opps! I dubbeled again!`,
      style: 'Belgian Dubbel',
      abv: '7.7%',
      ibu: '15',
      onTap: true,
      description: `Brew got changed midway through from a pale ale to a Belgian style Dubbel.  Hence, the "oops".  We accidentally added dark roasted malt and decided to switch it to a Belgian Brown Ale with added sugar and a Belgian abbey yeast strain.`
    },
    {
      name: `That's Not My Name`,
      style: 'American Pale Ale',
      abv: '5.5%',
      ibu: '30',
      onTap: false,
      description: ``
    },
    {
      name: `It's a Nice Day For A Weiss Wedding`,
      style: 'Berlinerweiss',
      abv: '3.4%',
      ibu: '6',
      onTap: false,
      description: ``
    },
    {
      name: `Extra Special Belgian`,
      style: 'Belgian ESB',
      abv: '5%',
      ibu: '32',
      onTap: true,
      description: `ESB fermented with a Belgian abbey yeast and dry hopped`
    },
    {
      name: `It'll be Gooder`,
      style: 'New England DIPA',
      abv: '8%',
      ibu: '60',
      onTap: true,
      description: `A follow up to "It'll Be Good" DIPA and earlier pilot beer.  This batch was double dry-hopped, once during fermentation and once after. Pale, wheat, oats, and a touch of munich for the malt bill and lots of juicy, fruity hops. Deceptively drinkable for a 8% beer`
    },
    {
      name: `4 Non Blondes`,
      style: 'Fruited Blonde Ale',
      abv: '4.6%',
      ibu: '15',
      onTap: false,
      description: ``
    },
    {
      name: `Grumpy Old Man`,
      style: 'Brown Ale',
      abv: '%',
      ibu: '',
      onTap: true,
      description: `Pours brown with red hues and good clarity.  Pronounced malt flavor with mild bitterness and a medium body.  This classic style goes down smooth.`
    },
    {
      name: `Hot & Fresh`,
      style: 'Cinnamon Brown Ale',
      abv: '5.5%',
      ibu: '25',
      onTap: true,
      description: `Taste like a cinnamon bun! Features vanilla, brown sugar, and cinnamon in a brown ale`
    },
    {
      name: `Observatory`,
      style: 'American Pale Ale',
      abv: '5.2%',
      ibu: '31',
      onTap: false,
      description: `Golden color with a slight haze and a fluffy white head. Bright, fresh hop character with honeydew melon, citrus, and floral notes. Moderate bitterness and a medium / light body.  An approachable pale ale.`
    },
    {
      name: `Patchwork`,
      style: 'Pumpkin Ale ',
      abv: '5.7%',
      ibu: '20',
      onTap: false,
      description: `Beautiful orange brown color with a slight haze.  Uses a blend of Munich, pale, wheat, and dark crystal malt along with 8 lbs of pumpkin puree added to the mash.  Medium low bitterness with a pleasant spice and squash character.  The spice is a blend of cinnamon, nutmeg, and clove.  It's there without being over-powering.  A great fall beer.`
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
