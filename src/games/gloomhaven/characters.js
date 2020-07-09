import { URL_PREFIX, EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

// Characters
const levels = ['1', 'X', '2', '3', '4', '5', '6', '7', '8', '9'];
const characterConfig = [
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
  {
    name: 'cragheart',
    code: 'CH',
    abilityCards: {
      'level-1': [
        'avalanche',
        'backup-ammunition',
        'crater',
        'crushing-grasp',
        'dirt-tornado',
        'earthen-clod',
        'massive-boulder',
        'opposing-strike',
        'rock-tunnel',
        'rumbling-advance',
        'unstable-upheaval',
      ],
      'level-X': ['forceful-storm', 'heaving-swing', 'natures-lift'],
      'level-2': ['explosive-punch', 'sentient-growth'],
      'level-3': ['blunt-force', 'clear-the-way'],
      'level-4': ['kinetic-assault', 'rock-slide'],
      'level-5': ['petrify', 'stone-pummel'],
      'level-6': ['cataclysm', 'dig-pit'],
      'level-7': ['brutal-momentum', 'meteor'],
      'level-8': ['lumbering-bash', 'rocky-end'],
      'level-9': ['blind-destruction', 'pulverize'],
    },
    nbAttackModifiers: 18,
  },
  {
    name: 'scoundrel',
    code: 'SC',
    abilityCards: {
      'level-1': [
        'backstab',
        'flanking-strike',
        'quick-hands',
        'single-out',
        'smoke-bomb',
        'special-mixture',
        'thiefs-knack',
        'throwing-knives',
        'venom-shiv',
      ],
      'level-X': ['sinister-opportunity', 'swift-bow', 'tricksters-reversal'],
      'level-2': ['flintlock', 'open-wound'],
      'level-3': ['duelists-advance', 'hidden-daggers'],
      'level-4': ['flurry-of-blades', 'gruesome-advantage'],
      'level-5': ['cull-the-weak', 'visage-of-the-inevitable'],
      'level-6': ['burning-oil', 'cripping-poison'],
      'level-7': ['spring-the-trap', 'stick-to-the-shadows'],
      'level-8': ['pains-end', 'stiletto-storm'],
      'level-9': ['long-con', 'watch-it-burn'],
    },
    nbAttackModifiers: 17,
  },
  {
    name: 'mindthief',
    code: 'MT',
    abilityCards: {
      'level-1': [
        'empathetic-assault',
        'fearsome-blade',
        'feedback-loop',
        'gnawing-horde',
        'into-the-night',
        'parasitic-influence',
        'perverse-edge',
        'scurry',
        'submissive-affliction',
        'the-minds-weakness',
      ],
      'level-X': ['frigid-apparition', 'possession', 'withering-claw'],
      'level-2': ['hostile-takeover', 'wretched-creature'],
      'level-3': ['brain-leech', 'silent-scream'],
      'level-4': ['cranium-overload', 'pilfer'],
      'level-5': ['frozen-mind', 'mass-hysteria'],
      'level-6': ['corrupting-embrace', 'dark-frenzy'],
      'level-7': ['psychic-projection', 'vicious-blood'],
      'level-8': ['shared-nightmare', 'domination'],
      'level-9': ['many-as-one', 'phantasmal-killer'],
    },
    nbAttackModifiers: 20,
  },
  ,
  {
    name: 'tinkerer',
    code: 'TI',
    abilityCards: {
      'level-1': [
        'energizing-tonic',
        'enhancement-field',
        'flamethrower',
        'harmless-contraption',
        'hook-gun',
        'ink-bomb',
        'net-shooter',
        'proximity-mine',
        'reinvigorating-elixir',
        'restorative-mist',
        'stun-shot',
        'toxic-bolt',
      ],
      'level-X': ['potent-potables', 'reviving-shock', 'volatile-concoction'],
      'level-2': ['disorienting-flash', 'stamina-booster'],
      'level-3': ['crank-bow', 'tinkerers-tools'],
      'level-4': ['dangerous-contraption', 'micro-bots'],
      'level-5': ['disintegration-beam', 'noxious-vials'],
      'level-6': ['auto-turret', 'gas-canister'],
      'level-7': ['curative-aerosol', 'murderous-contraption'],
      'level-8': ['harsh-stimulants', 'jet-propulsion'],
      'level-9': ['chimeric-formula', 'lethal-injection'],
    },
    nbAttackModifiers: 16,
  },
];

export const genCharacters = () => {
  const items = [];

  characterConfig.forEach((character) => {
    // Character cards
    levels.forEach((level) => {
      character.abilityCards[`level-${level}`].forEach((abilityName) => {
        items.push({
          type: 'image',
          content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/${character.code}/${abilityName}.png`,
          backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/${
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
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/${character.name}-icon.png`,
      width: 40,
      label: `${character.name} icon`,
      groupId: `${character.name}`,
    });

    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/${character.name}-character-token.png`,
      width: 20,
      label: `${character.name} token`,
      groupId: `${character.name}`,
    });

    // Character mats
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/${character.name}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/${character.name}-back.png`,
      width: 300,
      label: `${character.name} mat-board`,
      groupId: `${character.name}`,
      layer: -1,
    });

    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-perks/${character.name}-perks.png`,
      width: 300,
      label: `${character.name} perks-board`,
      groupId: `${character.name}`,
    });

    // Character-specific attack modifiers
    [...Array(character.nbAttackModifiers).keys()].forEach((_, index) => {
      const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
      items.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/${
          character.code
        }/am-${character.code.toLowerCase()}-${number}.png`,
        backContent: URL_PREFIX + 'gloom/attackback.png',
        width: 100,
        label: `${character.name} attack modifier ${number}`,
        groupId: `${character.name}`,
      });
    });
  });

  return items;
};
