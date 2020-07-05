import { URL_PREFIX } from '../config';

const genGame = () => {
  const items = [];

  // Resource Cards

  // 20
  [...Array(20)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/clay.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 100 - v,
      y: 300 - v,
    });

    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/stone.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 300 - v,
      y: 300 - v,
    });

    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/wood.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 500 - v,
      y: 300 - v,
    });

    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/wheat.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 700 - v,
      y: 300 - v,
    });

    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/sheep.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 900 - v,
      y: 300 - v,
    });
  });

  // search

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/cathedral.png',
    backContent: URL_PREFIX + 'settlers/back.png',
    width: 150,
    x: 100,
    y: 700,
  });

  [...Array(15)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/knight.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 300 - v,
      y: 700 - v,
    });
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/librarie.png',
    backContent: URL_PREFIX + 'settlers/back.png',
    width: 150,
    x: 500,
    y: 700,
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/market.png',
    backContent: URL_PREFIX + 'settlers/back.png',
    width: 150,
    x: 700,
    y: 700,
  });

  [...Array(2)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/progress.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 900 - v,
      y: 700 - v,
    });
  });

  [...Array(2)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/progress2.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 1100 - v,
      y: 700 - v,
    });
  });

  [...Array(2)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/progress3.png',
      backContent: URL_PREFIX + 'settlers/back.png',
      width: 150,
      x: 1300 - v,
      y: 700 - v,
    });
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/universty.png',
    backContent: URL_PREFIX + 'settlers/back.png',
    width: 150,
    x: 1500,
    y: 700,
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/cathedral.png',
    backContent: URL_PREFIX + 'settlers/back.png',
    width: 150,
    x: 1700,
    y: 700,
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/cathedral.png',
    backContent: URL_PREFIX + 'settlers/back.png',
    width: 150,
    x: 1700,
    y: 700,
  });

  // Tiles

  [...Array(3)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/tileClay.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 100 - v,
      y: 1000 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });
  [...Array(3)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/tileStone.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 400 - v,
      y: 1000 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });
  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/tileSheep.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 700 - v,
      y: 1000 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });
  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/tileWheat.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 1000 - v,
      y: 1000 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });
  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/tileWood.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 1300 - v,
      y: 1000 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/tileDesert.png',
    backContent: URL_PREFIX + 'settlers/tileBack.png',
    width: 300,
    x: 1600,
    y: 1000,
    rotation: 30,
    actions: ['rotate60'],
    layer: -1,
  });

  [...Array(9)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/tileSea2.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 1900 - v,
      y: 1000 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });

  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/portAll.png',
      backContent: URL_PREFIX + 'settlers/tileBack.png',
      width: 300,
      x: 300 - v,
      y: 1400 - v,
      rotation: 30,
      actions: ['rotate60'],
      layer: -1,
    });
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/portClay.png',
    backContent: URL_PREFIX + 'settlers/tileBack.png',
    width: 300,
    x: 600,
    y: 1400,
    rotation: 30,
    actions: ['rotate60'],
    layer: -1,
  });
  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/portStone.png',
    backContent: URL_PREFIX + 'settlers/tileBack.png',
    width: 300,
    x: 900,
    y: 1400,
    rotation: 30,
    actions: ['rotate60'],
    layer: -1,
  });
  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/portSheep.png',
    backContent: URL_PREFIX + 'settlers/tileBack.png',
    width: 300,
    x: 1200,
    y: 1400,
    rotation: 30,
    actions: ['rotate60'],
    layer: -1,
  });
  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/portWheat.png',
    backContent: URL_PREFIX + 'settlers/tileBack.png',
    width: 300,
    x: 1500,
    y: 1400,
    rotation: 30,
    actions: ['rotate60'],
    layer: -1,
  });
  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/portWood.png',
    backContent: URL_PREFIX + 'settlers/tileBack.png',
    width: 300,
    x: 1800,
    y: 1400,
    rotation: 30,
    actions: ['rotate60'],
    layer: -1,
  });

  // Score tokens

  Array.from('ABCDEFGHIJKLMNOPQR').forEach((l, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + `settlers/token_front_${l}.png`,
      backContent: URL_PREFIX + `settlers/token_back_${l}.png`,
      width: 80,
      x: 100 + 40 * v,
      y: 1700,
    });
  });

  // Tokens

  [...Array(5)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/houseRed.png',
      width: 70,
      x: 100 + 100 * v,
      y: 1800,
    });
  });

  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/house2red.png',
      width: 90,
      x: 100 + 100 * v,
      y: 1900,
    });
  });

  [...Array(15)].forEach((_, v) => {
    items.push({
      type: 'rect',
      color: '#FF0000',
      width: 20,
      height: 100,
      x: 700 + 40 * v,
      y: 1800,
      actions: ['rotate30'],
    });
  });

  [...Array(5)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/houseBlue.png',
      width: 70,
      x: 100 + 100 * v,
      y: 2050,
    });
  });

  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/house2Blue.png',
      width: 90,
      x: 100 + 100 * v,
      y: 2100,
    });
  });

  [...Array(15)].forEach((_, v) => {
    items.push({
      type: 'rect',
      color: '#0000FF',
      width: 20,
      height: 100,
      x: 700 + 40 * v,
      y: 2050,
      actions: ['rotate45'],
    });
  });

  [...Array(5)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/houseOrange.png',
      width: 70,
      x: 100 + 100 * v,
      y: 2250,
    });
  });

  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/house2Orange.png',
      width: 90,
      x: 100 + 100 * v,
      y: 2300,
    });
  });

  [...Array(15)].forEach((_, v) => {
    items.push({
      type: 'rect',
      color: '#ff6600',
      width: 20,
      height: 100,
      x: 700 + 40 * v,
      y: 2250,
      actions: ['rotate45'],
    });
  });

  [...Array(5)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/houseWhite.png',
      width: 70,
      x: 100 + 100 * v,
      y: 2450,
    });
  });

  [...Array(4)].forEach((_, v) => {
    items.push({
      type: 'image',
      content: URL_PREFIX + 'settlers/house2White.png',
      width: 90,
      x: 100 + 100 * v,
      y: 2500,
    });
  });

  [...Array(15)].forEach((_, v) => {
    items.push({
      type: 'rect',
      color: '#ffd5d5',
      width: 20,
      height: 100,
      x: 700 + 40 * v,
      y: 2450,
      actions: ['rotate45'],
    });
  });

  items.push({
    type: 'image',
    content: URL_PREFIX + 'settlers/rogue.png',
    x: 100,
    y: 2700,
  });

  items.push({
    type: 'dice',
    x: 100,
    y: 2800,
  });

  items.push({
    type: 'dice',
    x: 300,
    y: 2800,
  });

  return {
    items,
    availableItems: [],
    board: { size: 4000, scale: 0.5, name: 'settlers' },
  };
};

const game = genGame();

export default game;
