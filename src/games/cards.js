import { URL_PREFIX } from '../config';

const genGame = () => {
  const items = [];
  Array.from('CDHS').forEach((color, colorIndex) => {
    Array.from('A23456789BJQK').forEach((value, index) => {
      items.push({
        type: 'image',
        content: `${URL_PREFIX}cards/${value}${color}.jpg`,
        backContent: URL_PREFIX + 'cards/Red_back.jpg',
        width: 60,
        flipped: false,
        x: 100 + 200 * colorIndex,
        y: 100 + 1 * index,
      });
    });
  });

  return {
    availableItems: [],
    items,
    board: { size: 1000, scale: 0.5, name: 'cards' },
  };
};

export const game = genGame();

export default game;
