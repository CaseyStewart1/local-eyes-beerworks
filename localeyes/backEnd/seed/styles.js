const db = require('../db');
const Style = require('../models/style.js');

db.on('error', console.error.bind(console.error, ' bad connection'));

const main = async () => {
  const styles = [
    {
      style: 'IPA',
      type: 'Ale',
      description: `Today's American IPA is a different soul from the IPA style first reincarnated in the 1980s. More flavorful and aromatic than the withering English IPA, its color can range from very pale golden to reddish amber. Hops are the star here, and those used in the style tend to be American with an emphasis on herbal, piney, and/or fruity (especially citrusy) varieties.`
    },
    {
      style: 'Red',
      type: 'Ale',
      description: `Red ale is known for its unique malty taste and is on the lower side of the bitterness and alcohol content scales.`
    },
    {
      style: 'Dubbel',
      type: 'Ale',
      description: `The Belgian Dubbel is a rich, malty beer with some spicy or phenolic and mild alcoholic characteristics. Not as much fruitiness as a Belgian Strong Dark Ale, but some dark fruit aromas and flavors may be present. Medium amber to deep brown, this style is recognizable for its mild hop bitterness with no lingering hop flavors. A Dubbel is also likely show signs of a sweeter caramel flavor from the use of crystal malt or dark candi sugar. Look for a medium to full body with an expressive carbonation and some dryness in the finish. `
    },
    {
      style: 'Schwarzbier',
      type: 'Lager',
      description: `Schwarzbier ("shvahrts-beer"), is simply German for black beer. It doesn't mean that it's necessarily heavy or light in body, although most examples tend to be lighter. Unlike Porters or Stouts and other dark beers, they are not overly bitter with the burnt and heavily roasted malt characteristics that these styles tend to depend on. Instead, hops are used to achieve a good portion of the bitterness.`
    },
    {
      style: 'Marzen',
      type: 'Lager',
      description: `Märzenbier ranges from dark amber to deep copper in color. It's a full-bodied lager that's rich, malty (toasty, bready, biscuity, caramel, roasty), moderately hopped (floral, spicy, herbal), and finishes clean and dry like a good lager should. Alcohol can bite and warm a bit, but overall should be tame.`
    },
    {
      style: 'Helles',
      type: 'Lager',
      description: `“Helles” means “pale in color,” as these beers are often golden. The German-style Helles lager is a bit rounder or fuller-bodied than light lager and even all-malt pilsners. Helles lager beers offer a touch of sweetness that balance a measurable addition of spicy German hop flavor and light bitterness.`
    },
    {
      style: 'Czech Pilsner',
      type: 'Lager',
      description: `Red ale is known for its unique malty taste and is on the lower side of the bitterness and alcohol content scales.`
    },
    {
      style: 'German Pilsner',
      type: 'Ale',
      description: `A classic German-style Pilsner is straw to pale in color with a malty sweetness that can be perceived in aroma and flavor. Perception of hop bitterness is medium to high. Noble-type hop aroma and flavor are moderate and quite obvious.`
    },
    {
      style: 'Extra Special Bitter',
      type: 'Ale',
      description: `Extra Special Bitters are essentially more aggressive and more balanced Bitters, both in alcohol and hop character. They shouldn't be overpowering, however. The color range will be similar, though ESBs lean toward the darker end of the scale; dark golds to copper. Low in carbonation, this style is commonly served on cask.`
    },
    {
      style: 'Belgian Strong Ale',
      type: 'Ale',
      description: `The alcohol can be deceivingly hidden or very bold and in your face. Look for lots of complexity within a surprisingly delicate palate. Hop and malt character can vary, but most Strong Dark Ales are full of fruity and strong dark malt flavors. `
    }
  ];
  await Style.insertMany(styles);
  console.log('showed some style!');
};
const run = async () => {
  await main();
  db.close();
};

run();
