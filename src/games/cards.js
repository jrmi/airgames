const genGame = () => {
  const items = [];

  [...Array(3).keys()].forEach(() => {
    items.push({
      type: 'image',
      content: '/games/card.jpg',
      backContent: '/games/back.jpg',
      width: 100,
      flipped: true,
      x: 100,
      y: 100,
    });

    items.push({
      type: 'image',
      content: '/games/card.jpg',
      backContent: '/games/back.jpg',
      width: 100,
      flipped: true,
      x: 100,
      y: 100,
    });

    items.push({
      type: 'image',
      content: '/games/8diamond.png',
      backContent: '/games/back.jpg',
      width: 100,
      flipped: true,
      x: 100,
      y: 100,
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
