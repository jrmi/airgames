import slugify from 'slugify';
import { genEquipment } from './equipment';
import { genMonsters } from './monsters';
import { genCharacters } from './characters';
import { EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

const lowerSlug = function (text) {
  return slugify(text, { lower: true });
};

const genGloomhavenBox = () => {
  const items = [];

  // character section
  items.push(genCharacters());

  // monster section
  items.push(genMonsters());

  // Equipment section
  items.push(genEquipment());

  // map-tiles
  const mapTiles = [];
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
      mapTiles.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/map-tiles/${l}${incrY}a.png`,
        backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/map-tiles/${l}${incrY}b.png`,
        text: `${l}${incrY}a`,
        backText: `${l}${incrY}b`,
        layer: -3,
        label: `Tiles ${l}${incrY}a / ${l}${incrY}b`,
        holdItems: true,
      });
    });
  });

  items.push({ name: 'Map tiles', items: mapTiles });

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

  const overlay = overlayTokens.map(({ name, elements }) => {
    return {
      name,
      items: elements.map((elementName) => {
        return {
          type: 'image',
          content: `${EXTERNAL_IMAGE_URL_PREFIX}/overlay-tokens/${lowerSlug(
            name
          )}/${lowerSlug(elementName)}.png`,
          width: 50,
          label: `${elementName}`,
          layer: -1,
        };
      }),
    };
  });

  items.push({ name: 'Overlay token', items: overlay });

  const attackModif = [];

  // Attack modifiers
  attackModif.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/curse-card.jpg`,
    backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
    width: 100,
    label: `Curse Attack modifier`,
  });

  attackModif.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/benediction-card.jpg`,
    backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
    width: 100,
    label: `Benediction Attack modifier`,
  });

  const playerModif = [...Array(20).keys()].map((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/player/am-p-${number}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
      width: 100,
      label: `Player Attack modifier am-p-${number}`,
      groupId: 'attack-modifiers',
    };
  });

  attackModif.push({ name: 'Player modifiers', items: playerModif });

  const monsterModif = [...Array(20).keys()].map((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/monster/am-m-${number}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
      width: 100,
      label: `Monster Attack modifier am-p-${number}`,
      groupId: 'attack-modifiers',
    };
  });

  attackModif.push({ name: 'Monster modifiers', items: monsterModif });

  items.push({ name: 'Attack modifiers', items: attackModif });

  // Ailments (combat statuses)
  const ailmentNames = [
    'reinforcement',
    'disarm',
    'immobilise',
    'wound',
    'stun',
    'invisible',
    'confusion',
    'poison',
  ];

  const ailments = ailmentNames.map((ailmentName) => {
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/ailments/${ailmentName}.png`,
      width: 30,
      label: `${ailmentName} icon`,
      layer: 1,
    };
  });

  items.push({ name: 'Ailments', items: ailments });

  const cards = [];

  const battleGoalNames = [
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

  const battleGoals = battleGoalNames.map((battleGoalName) => {
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/battle-goals/${battleGoalName}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/battle-goals/battlegoal-back.png`,
      flipped: true,
      width: 30,
      label: `${battleGoalName}`,
    };
  });

  cards.push({ name: 'Battle goals', items: battleGoals });

  // Personal character goals
  const charGoals = [...Array(24).keys()].map((_, index) => {
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/personal-goals/pg-${
        index + 510
      }.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/personal-goals/pg-back.png`,
      width: 100,
      label: `Quest ${index + 1}`,
    };
  });

  cards.push({ name: 'Character goals', items: charGoals });

  // City events
  const cityEvents = [...Array(90).keys()].map((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/city/ce-${number}-f.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/city/ce-${number}-b.png`,
      width: 100,
      label: `City event ${number}`,
    };
  });

  cards.push({ name: 'City events', items: cityEvents });

  // Road events
  const roadEvents = [...Array(83).keys()].map((_, index) => {
    const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/road/re-${number}-f.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/events/base/road/re-${number}-b.png`,
      width: 100,
      label: `Road event ${number}`,
    };
  });

  cards.push({ name: 'Road events', items: roadEvents });

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

  const randomScenario = randomScenarioNames.map((scenarioName, index) => {
    return {
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/random-scenarios/${scenarioName}.png`,
      width: 50,
      label: `Scenario ${index + 1}`,
      groupId: 'random-scenarii',
    };
  });

  cards.push({ name: 'Random scenarii', items: randomScenario });

  items.push({ name: 'Cards', items: cards });

  const elements = ['ice', 'air', 'earth', 'fire', 'dark', 'light'].map(
    (elementName) => {
      return {
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/elements/${elementName}-element.svg`,
        width: 30,
        label: `Element ${elementName}`,
      };
    }
  );

  elements.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/elements/element-matboard.png`,
    width: 250,
    label: 'Matboard',
    layer: -1,
    holdItems: true,
  });

  // Elements
  items.push({
    name: 'Elements',
    items: elements,
  });

  const worldMap = [];

  worldMap.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/gloomhaven-map-orig.png`,
    width: 1000,
    label: `World map`,
    holdItems: true,
  });

  // Map locations
  const mapLocations = [...Array(95).keys()]
    .map((_, index) => {
      const number = index + 1;
      if ([11, 12, 35, 36].includes(number)) {
        // These tiles are special, and handled outside of this loop
        return;
      }
      return {
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/${number}.png`,
        width: 100,
        label: `Map tile ${number}`,
      };
    })
    .filter((el) => el);

  mapLocations.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/11-12.png`,
    width: 100,
    label: `Map tile 11-12`,
  });

  mapLocations.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/world-map/35-36.png`,
    width: 100,
    label: `Map tile 35-36`,
  });

  worldMap.push({ name: 'Locations', items: mapLocations });

  items.push({ name: 'World map', items: worldMap });

  const miscellaneous = [];

  miscellaneous.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/miscellaneous/round-tracker.jpg`,
    width: 10,
    label: 'Round tracker',
    groupId: 'miscellaneous',
  });

  // Counters
  miscellaneous.push({
    type: 'counter',
    value: 0,
    width: 50,
    label: 'Life counter',
  });

  miscellaneous.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/miscellaneous/tick-icon.png`,
    width: 10,
    label: `Tick icon`,
    groupId: 'miscellaneous',
  });

  miscellaneous.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/summons/summons.png`,
    width: 50,
    label: `Summon token`,
    groupId: 'summons',
  });

  items.push({ name: 'Miscellaneous', items: miscellaneous });

  return items;
};

export const gameBox = genGloomhavenBox();

export default gameBox;
