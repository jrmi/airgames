import box from './box';
import { URL_PREFIX, EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

const genGloomhaven = () => {
  const items = [];

  [...Array(4).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/archer/ma-ar-${
        index + 1
      }.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/archer/ma-ar-back.png`,
      width: 100,
      x: 200,
      y: 200,
    });
  });

  [...Array(4).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/guard/ma-gu-${
        index + 1
      }.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/guard/ma-gu-back.png`,
      width: 100,
      x: 200,
      y: 300,
    });
  });

  [...Array(4).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/living-bones/ma-lb-${
        index + 1
      }.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/living-bones/ma-lb-back.png`,
      width: 100,
      x: 200,
      y: 500,
    });
  });

  // map-tiles

  ['g2', 'i2', 'l3'].forEach((ln) => {
    const [l, n] = Array.from(ln);
    [...Array(n).keys()].forEach((y) => {
      items.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/map-tiles/${l}${y + 1}a.png`,
        backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/map-tiles/${l}${y + 1}b.png`,
        text: `${l}${y}a`,
        backText: `${l}${y}b`,
        layer: -1,
        x: 558,
        y: 80,
      });
    });
  });

  // character-mats

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/brute.png`,
    backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/brute-back.png`,
    width: 300,
    layer: -1,
    x: 500,
    y: 500,
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/spellweaver.png`,
    backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/spellweaver-back.png`,
    width: 300,
    layer: -1,
    x: 500,
    y: 700,
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-perks/brute-perks.png`,
    width: 300,
    x: 1000,
    y: 500,
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-perks/spellweaver-perks.png`,
    width: 300,
    x: 1000,
    y: 700,
  });

  // Attack modifiers

  [...Array(20).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/player/am-p-${number}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
      width: 100,
      flipped: true,
      x: 300,
      y: 200,
    });
  });

  [...Array(20).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/player/am-p-${number}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
      width: 100,
      flipped: true,
      x: 300,
      y: 600,
    });
  });

  [...Array(20).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/monster/am-m-${number}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
      width: 100,
      flipped: true,
      x: 1000,
      y: 300,
    });
  });

  // monster tokens
  [...Array(2).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/bandit-guard.png`,
      x: 1400 + 60 * index,
      y: 0,
      width: 60,
      text: `${index}`,
      overlay: {
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/${
          index < 7 ? 'normal' : 'elite'
        }-monster-overlay.svg`,
      },
    });
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/bandit-archer.png`,
      x: 1400 + 60 * index,
      y: 50,
      width: 60,
      text: `${index}`,
      overlay: {
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/${
          index < 7 ? 'normal' : 'elite'
        }-monster-overlay.svg`,
      },
    });
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/living-bones.png`,
      x: 1400 + 60 * index,
      y: 100,
      width: 60,
      text: `${index}`,
      overlay: {
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/${
          index < 7 ? 'normal' : 'elite'
        }-monster-overlay.svg`,
      },
    });
  });

  const monsters = ['bandit-guard', 'bandit-archer', 'living-bones'];

  monsters.forEach((monsterName, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/${monsterName}-0.png`,
      x: 1300 + 200 * index,
      y: 300,
      width: 200,
    });
  });

  // Overlay tokens
  [...Array(5).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/treasures/coin-1.png`,
      x: 1100 + 20 * index,
      y: 200,
      width: 50,
    });
  });

  items.push({
    type: 'counter',
    label: 'Life #1',
    value: 0,
    x: 100,
    y: 100,
    width: 50,
  });

  items.push({
    type: 'counter',
    label: 'Life #2',
    value: 0,
    x: 100,
    y: 300,
    width: 50,
  });

  items.push({
    type: 'counter',
    label: 'XP #1',
    value: 0,
    x: 300,
    y: 100,
    width: 50,
  });

  items.push({
    type: 'counter',
    label: 'XP #2',
    value: 0,
    x: 300,
    y: 300,
    width: 50,
  });

  items.push({
    type: 'counter',
    label: 'Gold #1',
    value: 0,
    x: 100,
    y: 600,
    width: 50,
  });

  items.push({
    type: 'counter',
    label: 'Gold #2',
    value: 0,
    x: 100,
    y: 900,
    width: 50,
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/treasures/treasure.png`,
    x: 1100,
    y: 250,
    width: 50,
  });

  [...Array(2).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/doors/stone-door.png`,
      x: 1100 + 20 * index,
      y: 300,
      width: 50,
    });
  });

  [...Array(2).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/traps/spike-pit-trap.png`,
      x: 1100 + 20 * index,
      y: 350,
      width: 50,
    });
  });

  [...Array(2).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/obstacles/table.png`,
      x: 1100 + 20 * index,
      y: 400,
      width: 50,
    });
  });

  // Character ability cards
  const brute = {
    code: 'BR',
    abilityCards: {
      'level-1': [
        'eye-for-an-eye',
        'grab-and-go',
        'leaping-cleave',
        'overwhelming-assault',
        'provoking-roar',
        'shield-bash',
        'spare-dagger',
        'sweeping-blow',
        'trample',
        'warding-strength',
      ],
      'level-X': ['balanced-measure', 'skewer', 'wall-of-doom'],
      'level-2': ['fatal-advance', 'juggernaut'],
      'level-3': ['brute-force', 'hook-and-chain'],
      'level-4': ['devastating-hack', 'unstoppable-charge'],
      'level-5': ['skirmishing-maneuver', 'whirlwind'],
      'level-6': ['immovable-phalanx', 'quietus'],
      'level-7': ['crippling-offensive', 'defensive-tactics'],
      'level-8': ['frenzied-onslaught', 'selfish-retribution'],
      'level-9': ['face-your-end', 'king-of-the-hill'],
    },
    backCard: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/BR/br-back.png`,
    icon: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/brute-icon.png`,
    token: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/brute-character-token.png`,
  };

  brute.abilityCards['level-1'].forEach((abilityName, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/${brute.code}/${abilityName}.png`,
      backContent: `${brute.backCard}`,
      x: 0 + 100 * index,
      y: 1000,
      width: 100,
    });
  });

  items.push({
    type: 'image',
    content: brute.icon,
    x: 450,
    y: 500,
    width: 40,
  });

  [...Array(5).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: brute.token,
      x: 350 + 20 * index,
      y: 500,
      width: 20,
    });
  });

  const spellWeaver = {
    code: 'SW',
    abilityCards: {
      'level-1': [
        'fire-orbs',
        'flame-strike',
        'freezing-nova',
        'frost-armor',
        'impaling-eruption',
        'mana-bolt',
        'reviving-ether',
        'ride-the-wind',
      ],
      'level-X': ['crackling-air', 'hardened-spikes', 'aid-from-the-ether'],
      'level-2': ['flashing-burst', 'icy-blast'],
      'level-3': ['elemental-aid', 'cold-fire'],
      'level-4': ['forked-beam', 'spirit-of-doom'],
      'level-5': ['engulfed-in-flames', 'chromatic-explosion'],
      'level-6': ['frozen-night', 'living-torch'],
      'level-7': ['stone-fists', 'twin-restoration'],
      'level-8': ['zephyr-wings', 'cold-front'],
      'level-9': ['inferno', 'black-hole'],
    },
    backCard: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/SW/sw-back.png`,
    icon: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/spellweaver-icon.png`,
    token: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/spellweaver-character-token.png`,
  };

  spellWeaver.abilityCards['level-1'].forEach((abilityName, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/${spellWeaver.code}/${abilityName}.png`,
      backContent: `${spellWeaver.backCard}`,
      x: 0 + 100 * index,
      y: 1150,
      width: 100,
      layer: 1,
    });
  });

  items.push({
    type: 'image',
    content: spellWeaver.icon,
    x: 450,
    y: 700,
    width: 40,
  });

  [...Array(5).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: spellWeaver.token,
      x: 350 + 20 * index,
      y: 700,
      width: 20,
      layer: 2,
    });
  });

  const elements = ['ice', 'air', 'earth', 'fire', 'dark', 'light'];
  elements.forEach((elementName, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/elements/${elementName}-element.svg`,
      x: 0 + 30 * index,
      y: 0,
      width: 30,
    });
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/elements/element-matboard.png`,
    x: 0,
    y: 100,
    width: 300,
    layer: -1,
  });

  const battleGoals = [
    'aggressor',
    'diehard',
    'dynamo',
    'executioner',
    'explorer',
    'fasthealer',
    'hoarder',
    'hunter',
    'indigent',
    'layabout',
    'masochist',
    'neutralizer',
    'opener',
    'pacifist',
    'plunderer',
    'professional',
    'protector',
    'purist',
    'sadist',
    'scrambler',
    'straggler',
    'streamliner',
    'workhorse',
    'zealot',
  ];
  battleGoals.forEach((battleGoalName, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/battle-goals/${battleGoalName}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/battle-goals/battlegoal-back.png`,
      x: 200 + 1 * index,
      y: 0 + 1 * index,
      flipped: true,
      width: 30,
    });
  });

  return {
    items: items.map((item, index) => {
      item.id = `${index}`;
      return item;
    }),
    availableItems: box,
    board: {
      size: 3000,
      scale: 0.5,
      url: `${URL_PREFIX}/gloomhaven.json`,
      name: 'gloomhaven',
    },
  };
};

export const game = genGloomhaven();

export default game;
