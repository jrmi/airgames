import { EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

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
  {
    name: 'sawbones',
    code: 'SB',
    abilityCards: {
      'level-1': [
        'battlefield-medicine',
        'bloody-saw',
        'booster-shot',
        'curative-mixture',
        'first-aid',
        'hand-of-the-surgeon',
        'hold-back-the-pain',
        'mobile-response',
        'syringe',
        'triage',
        'medical-pack',
        'large-medical-pack',
      ],
      'level-X': ['prevention-is-key', 'teamwork', 'vaccine'],
      'level-2': ['hamstring', 'precaution'],
      'level-3': ['regenerative-tissue', 'vital-strike'],
      'level-4': ['blood-transfusion', 'do-no-harm'],
      'level-5': ['amputate', 'research-the-cure'],
      'level-6': ['euthanize', 'prescription'],
      'level-7': ['master-physician', 'surgeons-satchel'],
      'level-8': ['bedside-manner', 'gentlemans-anger'],
      'level-9': ['grisly-trauma', 'prep-for-surgery'],
    },
    nbAttackModifiers: 14,
  },
  {
    name: 'sunkeeper',
    code: 'SK',
    abilityCards: {
      'level-1': [
        'brilliant-prayer',
        'cautious-advance',
        'dazzling-charge',
        'defensive-stance',
        'empowering-command',
        'hammer-blow',
        'holy-strike',
        'lay-on-hands',
        'protective-blessing',
        'purifying-aura',
        'tactical-order',
      ],
      'level-X': ['beacon-of-light', 'daybreak', 'glorious-bolt'],
      'level-2': ['practical-plans', 'unwavering-mandate'],
      'level-3': ['mobilizing-axiom', 'burning-flash'],
      'level-4': ['engulfing-radiance', 'righteous-strength'],
      'level-5': ['path-of-glory', 'scales-of-justice'],
      'level-6': ['supportive-chant', 'illuminate-the-target'],
      'level-7': ['bright-aegis', 'weapon-of-purity'],
      'level-8': ['cleansing-force', 'inspiring-sanctity'],
      'level-9': ['angelic-ascension', 'divine-intervention'],
    },
    nbAttackModifiers: 19,
  },
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
  {
    name: 'beast-tyrant',
    code: 'BT',
    abilityCards: {
      'level-1': [
        'concentrated-rage',
        'disappearing-wounds',
        'disorienting-roar',
        'forceful-swipe',
        'howling-bolts',
        'maul',
        'patch-fur',
        'relentless-ally',
        'spirit-swap',
        'venomous-ally',
      ],
      'level-X': ['borrowed-essence', 'focused-aggression', 'soaring-ally'],
      'level-2': ['earthen-spikes', 'energizing-strike'],
      'level-3': ['unstoppable-beast', 'vicious-ally'],
      'level-4': ['ancient-ward', 'punch-throug'],
      'level-5': ['rampage', 'stone-sigil'],
      'level-6': ['blood-hunger', 'primal-blessing'],
      'level-7': ['storm-sigil', 'tyrannical-force'],
      'level-8': ['lash-out', 'natural-remedy'],
      'level-9': ['jaws-of-death', 'tribal-sigil'],
    },
    nbAttackModifiers: 17,
  },
  {
    name: 'quartermaster',
    code: 'QM',
    abilityCards: {
      'level-1': [
        'cleaving-axe',
        'crippling-bow',
        'hastened-step',
        'impaling-spear',
        'iron-bulwark',
        'oversized-pack',
        'proficiency',
        'restock',
        'sharpening-kit',
      ],
      'level-X': ['crushing-hammer', 'reserved-energy', 'scroll-of-recall'],
      'level-2': ['bladed-boomerang', 'reforge'],
      'level-3': ['continual-supply', 'scroll-of-lightning'],
      'level-4': ['giant-club', 'side-pouch'],
      'level-5': ['reinforced-steel', 'scroll-of-judgment'],
      'level-6': ['catastrophic-bomb', 'quiver-of-arrows'],
      'level-7': ['refreshment', 'scroll-of-blizzards'],
      'level-8': ['fortified-position', 'portable-ballista'],
      'level-9': ['bag-of-holding', 'scroll-of-annihilation'],
    },
    nbAttackModifiers: 18,
  },
  {
    name: 'elementalist',
    code: 'EL',
    abilityCards: {
      'level-1': [
        'formless-power',
        'frigid-torrent',
        'ice-spikes',
        'infernal-vortex',
        'lava-eruption',
        'pure-augmentation',
        'raw-enhancement',
        'shaping-the-ether',
        'stoking-hail',
        'tremulant-cyclone',
      ],
      'level-X': [
        'brilliant-flash',
        'encompassing-shadow',
        'malleable-evocation',
      ],
      'level-2': ['boiling-arc', 'crystallizing-blast'],
      'level-3': ['burial', 'chain-lightning'],
      'level-4': ['gravel-vortex', 'primal-duality'],
      'level-5': ['obsidian-shards', 'winters-edge'],
      'level-6': ['eye-of-the-hurricane', 'simulacrum'],
      'level-7': ['pragmatic-reinforcement', 'vengeance'],
      'level-8': ['elemental-aegis', 'volatile-consumption'],
      'level-9': ['eternal-equilibrium', 'ethereal-manifestation'],
    },
    nbAttackModifiers: 24,
  },
];

export const genCharacters = () => {
  const characterItems = characterConfig.map((character) => {
    const items = [];

    // Character icons/tokens
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/${character.name}-icon.png`,
      width: 40,
      label: `${character.name} icon`,
    });

    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-icons/${character.name}-character-token.png`,
      width: 20,
      label: `${character.name} token`,
    });

    // Character mats
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/${character.name}.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/character-mats/${character.name}-back.png`,
      width: 300,
      label: `${character.name} mat-board`,
      layer: -1,
    });

    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-perks/${character.name}-perks.png`,
      width: 300,
      label: `${character.name} perks-board`,
    });

    // Character cards
    const cards = [];
    levels.forEach((level) => {
      character.abilityCards[`level-${level}`].forEach((abilityName) => {
        cards.push({
          type: 'image',
          content: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/${character.code}/${abilityName}.png`,
          backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/character-ability-cards/${
            character.code
          }/${character.code.toLowerCase()}-back.png`,
          width: 100,
          label: `Level ${level} card: ${abilityName}`,
        });
      });
    });

    items.push({ name: 'Cards', items: cards });

    // Character-specific attack modifiers
    const modif = [...Array(character.nbAttackModifiers).keys()].map(
      (_, index) => {
        const number = index < 9 ? '0' + (index + 1) : '' + (index + 1);
        return {
          type: 'image',
          content: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/${
            character.code
          }/am-${character.code.toLowerCase()}-${number}.png`,
          backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/attack-modifiers/base/attackback.png`,
          width: 100,
          label: `${character.name} attack modifier ${number}`,
        };
      }
    );

    items.push({ name: 'Modifiers', items: modif });

    return { name: character.name, items };
  });

  return { name: 'Characters', items: characterItems };
};
