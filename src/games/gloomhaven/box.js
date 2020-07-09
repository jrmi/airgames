import slugify from 'slugify';
import { genEquipment } from './equipment';
import { genMonsters } from './monsters';
import { genCharacters } from './characters';
import { URL_PREFIX, EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

const lowerSlug = function (text) {
  return slugify(text, { lower: true });
};

const genGloomhavenBox = () => {
  const items = [];

  // monster section
  const monsters = genMonsters();
  monsters.forEach((item) => items.push(item));

  // character section
  const characters = genCharacters();
  characters.forEach((item) => items.push(item));

  // monster section
  const equipment = genEquipment();
  equipment.forEach((item) => items.push(item));

  // map-tiles
  [
    'a4',
    'b4',
    'c2',
    'd2',
    'e1',
    'f1',
    'g2',
    'h3',
    'i2',
    'j2',
    'k2',
    'l3',
    'm1',
    'n1',
  ].forEach((ln) => {
    const [l, n] = Array.from(ln);
    [...Array(parseInt(n)).keys()].forEach((y) => {
      const incrY = y + 1;
      items.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/map-tiles/${l}${incrY}a.png`,
        backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/map-tiles/${l}${incrY}b.png`,
        text: `${l}${incrY}a`,
        backText: `${l}${incrY}b`,
        layer: -1,
        groupId: 'scenario-tiles',
        label: `Tiles ${l}${incrY}a / ${l}${incrY}b`,
      });
    });
  });

  // Attack modifiers

  [...Array(19).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/player/am-p-${number}.png`,
      backContent: URL_PREFIX + 'gloom/attackback.png',
      width: 100,
      flipped: true,
      label: `Player Attack modifier am-p-${number}`,
      groupId: 'attack-modifiers',
    });
  });

  [...Array(19).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/monster/am-m-${number}.png`,
      backContent: URL_PREFIX + 'gloom/attackback.png',
      width: 100,
      flipped: true,
      label: `Monster Attack modifier am-p-${number}`,
      groupId: 'attack-modifiers',
    });
  });

  // Counters
  items.push({
    type: 'counter',
    value: 0,
    width: 50,
    label: 'Life counter',
    groupId: 'counters',
  });

  // Overlay tokens
  const overlayTokens = [
    {
      name: 'Doors',
      elements: ['Stone door', 'Wood door', 'Dark fog', 'Light fog'],
    },
    {
      name: 'Corridors',
      elements: [
        'Earth 1',
        'Earth 2',
        'Man-made stone 1',
        'Man-made stone 2',
        'Natural stone 1',
        'Natural stone 2',
        'Pressure plate',
        'Wood 1',
        'Wood 2',
      ],
    },
    {
      name: 'Traps',
      elements: ['Bear trap', 'Poison gas trap', 'Spike pit trap'],
    },
    {
      name: 'Difficult terrain',
      elements: ['Log', 'Rubble', 'Stairs', 'Water'],
    },
    {
      name: 'Hazardous terrain',
      elements: ['Hot coals', 'Thorns'],
    },
    {
      name: 'Treasures',
      elements: ['Coin 1', 'Coin 5', 'Treasure'],
    },
    {
      name: 'Obstacles',
      elements: [
        'Altar',
        'Barrel',
        'Bookcase',
        'Boulder 1',
        'Boulder 2',
        'Boulder 3',
        'Bush',
        'Cabinet',
        'Crate',
        'Crystal',
        'Dark pit',
        'Fountain',
        'Nest',
        'Rock column',
        'Sarcophagus',
        'Shelf',
        'Stalagmites',
        'Stone pillar',
        'Stump',
        'Table',
        'Totem',
        'Tree',
        'Wall section',
      ],
    },
  ];
  overlayTokens.forEach((overlayToken) => {
    overlayToken.elements.forEach((elementName) => {
      items.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/${lowerSlug(
          overlayToken.name
        )}/${lowerSlug(elementName)}.png`,
        width: 50,
        label: `${elementName}`,
        groupId: `${lowerSlug(overlayToken.name)}`,
      });
    });
  });

  // Elements
  const elements = ['ice', 'air', 'earth', 'fire', 'dark', 'light'];
  elements.forEach((elementName) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/elements/${elementName}-element.svg`,
      width: 30,
      label: `Element ${elementName}`,
      groupId: 'elements',
    });
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/elements/element-matboard.png`,
    width: 250,
    label: 'Element matboard',
    groupId: 'elements',
    layer: -1,
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/miscellaneous/round-tracker.jpg`,
    width: 10,
    label: 'Round tracker',
    groupId: 'miscellaneous',
  });

  // Ailments (combat statuses)
  const ailments = [
    'reinforcement',
    'disarm',
    'immobilise',
    'wound',
    'stun',
    'invisible',
    'confusion',
    'poison',
  ];

  ailments.forEach((ailmentName) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/ailments/${ailmentName}.png`,
      width: 30,
      label: `${ailmentName} icon`,
      groupId: 'ailments',
      layer: 1,
    });
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

  battleGoals.forEach((battleGoalName) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/battle-goals/${battleGoalName}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/battle-goals/battlegoal-back.png`,
      flipped: true,
      width: 30,
      label: `${battleGoalName}`,
      groupId: 'battle-goals',
    });
  });

  // Personal character goals
  [...Array(24).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/personal-goals/pg-${
        index + 510
      }.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/personal-goals/pg-back.png`,
      width: 100,
      label: `Quest ${index + 1}`,
      groupId: 'personal-goals',
    });
  });

  // City events
  [...Array(90).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/city/ce-${number}-f.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/city/ce-${number}-b.png`,
      width: 100,
      label: `City event ${number}`,
      groupId: 'city-events',
    });
  });

  // Road events
  [...Array(83).keys()].forEach((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/road/re-${number}-f.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/road/re-${number}-b.png`,
      width: 100,
      label: `Road event ${number}`,
      groupId: 'road-events',
    });
  });

  // Map elements
  [...Array(95).keys()].forEach((_, index) => {
    const number = index + 1;
    if ([11, 12, 35, 36].includes(number)) {
      // These tiles are special, and handled outside of this loop
      return;
    }
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/${number}.png`,
      width: 100,
      label: `Map tile ${number}`,
      groupId: 'world-map',
    });
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/11-12.png`,
    width: 100,
    label: `Map tile 11-12`,
    groupId: 'world-map',
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/35-36.png`,
    width: 100,
    label: `Map tile 35-36`,
    groupId: 'world-map',
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/gloomhaven-map-orig.png`,
    width: 1000,
    label: `World map`,
    groupId: 'world-map',
  });

  const randomScenarioNames = [
    'arcane-library',
    'chained-isle',
    'clockwork-cove',
    'magma-pit',
    'sulfur-mine',
    'toxic-moor',
    'underwater-lagoon',
    'well-of-the-unfortunate',
    'windswept-highlands',
  ];
  randomScenarioNames.forEach((scenarioName, index) => {
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/random-scenarios/${scenarioName}.png`,
      width: 50,
      label: `Scenario ${index + 1}`,
      groupId: 'random-scenarii',
    });
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/summons/summons.png`,
    width: 50,
    label: `Summon token`,
    groupId: 'summons',
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/miscellaneous/tick-icon.png`,
    width: 10,
    label: `Tick icon`,
    groupId: 'miscellaneous',
  });

  return items;
};

export const gameBox = genGloomhavenBox();

export default gameBox;
