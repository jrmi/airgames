import tiktok from './games/tiktok';
import settlers from './games/settlers';
import gloomhaven from './games/gloomhaven';
import cards from './games/cards';
import fs from 'fs';

const URL_PREFIX = process.env.URL_PREFIX || './';

const gameList = [
  { name: 'Tiktok', url: `${URL_PREFIX}tiktok.json` },
  { name: 'Cards', url: `${URL_PREFIX}cards.json` },
  { name: 'Settlers of Cathan', url: `${URL_PREFIX}settlers.json` },
  { name: 'Gloomhaven', url: `${URL_PREFIX}gloomhaven.json` },
];

const genJson = (data, name) => {
  // stringify JSON Object
  var jsonContent = JSON.stringify(data, null, 2);

  fs.writeFile(`_build/${name}.json`, jsonContent, 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
  });
};

fs.rmdir('./_build', { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
  fs.mkdir('./_build', function (err) {
    if (err) {
      throw err;
    } else {
      genJson(tiktok, 'tiktok');
      genJson(settlers, 'settlers');
      genJson(gloomhaven, 'gloomhaven');
      genJson(cards, 'cards');

      genJson(gameList, 'gameList');
    }
  });
});
