import slugify from 'slugify';
import { URL_PREFIX } from '../config';

const genGloomhavenBox = () => {
  const items = [];

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
        content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/map-tiles/${l}${incrY}a.png`,
        backContent: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/map-tiles/${l}${incrY}b.png`,
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/attack-modifiers/base/player/am-p-${number}.png`,
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/attack-modifiers/base/monster/am-m-${number}.png`,
      backContent: URL_PREFIX + 'gloom/attackback.png',
      width: 100,
      flipped: true,
      label: `Monster Attack modifier am-p-${number}`,
      groupId: 'attack-modifiers',
    });
  });

  // monster section
  const monsterNames = [
    'Bandit guard',
    'Bandit archer',
    'Living bones',
    'Living Corpse',
  ];
  const monsterModes = ['normal', 'elite'];

  monsterNames.forEach((monsterName) => {
    // monster tokens
    monsterModes.forEach((monsterMode) => {
      items.push({
        type: 'image',
        content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/monster-tokens/${slugify(
          monsterName,
          { lower: true }
        )}.png`,
        width: 60,
        text: 'X',
        overlay: {
          content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/monster-tokens/${monsterMode}-monster-overlay.svg`,
        },
        label: `${monsterName} ${monsterMode}`,
        groupId: 'monster-tokens',
      });
    });

    // monster stat cards
    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com//romgar/gloomhaven/master/images/monster-stat-cards/${slugify(
        monsterName,
        { lower: true }
      )}-0.png`,
      width: 200,
      label: `${monsterName}`,
      groupId: `monster-stats-cards`,
    });
  });

  // Overlay tokens
  items.push({
    type: 'image',
    content:
      'https://raw.githubusercontent.com//romgar/gloomhaven/master/images/overlay-tokens/treasures/coin-1.png',
    width: 50,
    label: 'Coin 1',
    groupId: 'treasures',
  });

  items.push({
    type: 'image',
    content:
      'https://raw.githubusercontent.com//romgar/gloomhaven/master/images/overlay-tokens/treasures/treasure.png',
    width: 50,
    label: 'Treasure',
    groupId: 'treasures',
  });

  items.push({
    type: 'counter',
    value: 0,
    width: 50,
    label: 'Life counter',
    groupId: 'counters',
  });

  items.push({
    type: 'image',
    content:
      'https://raw.githubusercontent.com//romgar/gloomhaven/master/images/overlay-tokens/doors/stone-door.png',
    width: 50,
    label: 'Stone door',
    groupId: 'doors',
  });

  items.push({
    type: 'image',
    content:
      'https://raw.githubusercontent.com//romgar/gloomhaven/master/images/overlay-tokens/traps/spike-pit-trap.png',
    width: 50,
    label: 'Spike pit trap',
    groupId: 'traps',
  });

  items.push({
    type: 'image',
    content:
      'https://raw.githubusercontent.com//romgar/gloomhaven/master/images/overlay-tokens/obstacles/table.png',
    width: 50,
    label: 'Table',
    groupId: 'obstacles',
  });

  // Character ability cards
  const levels = ['1', 'X', '2', '3', '4', '5', '6', '7', '8', '9'];
  const characters = [
    {
      name: 'brute',
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
      nbAttackModifiers: 22,
    },
    {
      name: 'spellweaver',
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
      nbAttackModifiers: 18,
    },
  ];

  characters.forEach((character) => {
    // Character cards
    levels.forEach((level) => {
      character.abilityCards[`level-${level}`].forEach((abilityName) => {
        items.push({
          type: 'image',
          content: `https://raw.githubusercontent.com//romgar/gloomhaven/master/images/character-ability-cards/${character.code}/${abilityName}.png`,
          backContent: `https://raw.githubusercontent.com//romgar/gloomhaven/master/images/character-ability-cards/${
            character.code
          }/${character.code.toLowerCase()}-back.png`,
          width: 100,
          label: `Level ${level} card: ${abilityName}`,
          groupId: `${character.name}`,
        });
      });
    });

    // Character icons/tokens
    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/character-icons/${character.name}-icon.png`,
      width: 40,
      label: `${character.name} icon`,
      groupId: `${character.name}`,
    });

    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/character-icons/${character.name}-character-token.png`,
      width: 20,
      label: `${character.name} token`,
      groupId: `${character.name}`,
    });

    // Character mats
    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/character-mats/${character.name}.png`,
      backContent: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/character-mats/${character.name}-back.png`,
      width: 300,
      label: `${character.name} mat-board`,
      groupId: `${character.name}`,
      layer: -1,
    });

    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/character-perks/${character.name}-perks.png`,
      width: 300,
      label: `${character.name} perks-board`,
      groupId: `${character.name}`,
    });

    // Character-specific attack modifiers
    [...Array(character.nbAttackModifiers).keys()].forEach((_, index) => {
      const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
      items.push({
        type: 'image',
        content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/attack-modifiers/${
          character.code
        }/am-${character.code.toLowerCase()}-${number}.png`,
        backContent: URL_PREFIX + 'gloom/attackback.png',
        width: 100,
        label: `${character.name} attack modifier ${number}`,
        groupId: `${character.name}`,
      });
    });
  });

  // Elements
  const elements = ['ice', 'air', 'earth', 'fire', 'dark', 'light'];
  elements.forEach((elementName) => {
    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/elements/${elementName}-element.svg`,
      width: 30,
      label: `Element ${elementName}`,
      groupId: 'elements',
    });
  });

  items.push({
    type: 'image',
    content:
      'https://raw.githubusercontent.com/romgar/gloomhaven/master/images/elements/element-matboard.png',
    width: 300,
    label: 'Element matboard',
    groupId: 'elements',
    layer: -1,
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/ailments/${ailmentName}.png`,
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/battle-goals/${battleGoalName}.png`,
      backContent:
        'https://raw.githubusercontent.com/romgar/gloomhaven/master/images/battle-goals/battlegoal-back.png',
      flipped: true,
      width: 30,
      label: `${battleGoalName}`,
      groupId: 'battle-goals',
    });
  });

  const characterItems = [
    'boots-of-striding',
    'cloak-of-invisibility',
    'eagle-eye-goggles',
    'heater-shield',
    'hide-armor',
    'iron-helmet',
    'leather-armor',
    'minor-healing-potion',
    'minor-power-potion',
    'minor-stamina-potion',
    'piercing-bow',
    'poison-dagger',
    'war-hammer',
    'winged-shoes',
  ];
  characterItems.forEach((itemName) => {
    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/items/1-14/${itemName}.png`,
      flipped: true,
      width: 40,
      label: `${itemName}`,
      groupId: 'items 1-14',
    });
  });

  // Personal character goals
  [...Array(24).keys()].forEach((_, index) => {
    items.push({
      type: 'image',
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/personal-goals/pg-${
        index + 510
      }.png`,
      backContent:
        'https://raw.githubusercontent.com/romgar/gloomhaven/master/images/personal-goals/pg-back.png',
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/events/base/city/ce-${number}-f.png`,
      backContent: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/events/base/city/ce-${number}-b.png`,
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/events/base/road/re-${number}-f.png`,
      backContent: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/events/base/road/re-${number}-b.png`,
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
      content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/world-map/${number}.png`,
      width: 100,
      label: `Map tile ${number}`,
      groupId: 'world-map',
    });
  });

  items.push({
    type: 'image',
    content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/world-map/11-12.png`,
    width: 100,
    label: `Map tile 11-12`,
    groupId: 'world-map',
  });

  items.push({
    type: 'image',
    content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/world-map/35-36.png`,
    width: 100,
    label: `Map tile 35-36`,
    groupId: 'world-map',
  });

  items.push({
    type: 'image',
    content: `https://raw.githubusercontent.com/romgar/gloomhaven/master/images/world-map/gloomhaven-map-orig.png`,
    width: 1000,
    label: `World map`,
    groupId: 'world-map',
  });

  return items;
};

export const gameBox = genGloomhavenBox();

export default gameBox;
