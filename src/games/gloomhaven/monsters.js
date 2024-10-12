import slugify from 'slugify';

import {
  EXTERNAL_IMAGE_URL_PREFIX,
  LOCAL_IMAGE_URL_PREFIX,
} from '../../config';

const monstersConfig = [
  {
    name: 'Ancient artillery',
    category: 'ancient-artillery',
    shortName: 'aa',
  },
  {
    name: 'Bandit archer',
    category: 'archer',
    shortName: 'ar',
  },
  {
    name: 'Bandit commander',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Bandit guard',
    category: 'guard',
    shortName: 'gu',
  },
  {
    name: 'The betrayer',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Black imp',
    category: 'imp',
    shortName: 'im',
  },
  {
    name: 'Captain of the guard',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Cave bear',
    category: 'cave-bear',
    shortName: 'cb',
  },
  {
    name: 'City archer',
    category: 'archer',
    shortName: 'ar',
  },
  {
    name: 'City guard',
    category: 'guard',
    shortName: 'gu',
  },
  {
    name: 'The colorless',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Cultist',
    category: 'cultist',
    shortName: 'cu',
  },
  {
    name: 'Dark rider',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Deep terror',
    category: 'deep-terror',
    shortName: 'dt',
  },
  {
    name: 'Earth demon',
    category: 'earth-demon',
    shortName: 'ed',
  },
  {
    name: 'Elder drake',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Flame demon',
    category: 'flame-demon',
    shortName: 'fld',
  },
  {
    name: 'Forest imp',
    category: 'imp',
    shortName: 'im',
  },
  {
    name: 'Frost demon',
    category: 'frost-demon',
    shortName: 'frd',
  },
  {
    name: 'Giant viper',
    category: 'giant-viper',
    shortName: 'gv',
  },
  {
    name: 'The gloom',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Harrower infester',
    category: 'harrower-infester',
    shortName: 'hi',
  },
  {
    name: 'Hound',
    category: 'hound',
    shortName: 'ho',
  },
  {
    name: 'Inox archer',
    category: 'archer',
    shortName: 'ar',
  },
  {
    name: 'Inox bodyguard',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Inox guard',
    category: 'guard',
    shortName: 'gu',
  },
  {
    name: 'Inox shaman',
    category: 'shaman',
    shortName: 'sh',
  },
  {
    name: 'Jekserah',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Living bones',
    category: 'living-bones',
    shortName: 'lb',
  },
  {
    name: 'Living corpse',
    category: 'living-corpse',
    shortName: 'lc',
  },
  {
    name: 'Living spirit',
    category: 'living-spirit',
    shortName: 'ls',
  },
  {
    name: 'Lurker',
    category: 'lurker',
    shortName: 'lu',
  },
  {
    name: 'Merciless overseer',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Night demon',
    category: 'night-demon',
    shortName: 'nd',
  },
  {
    name: 'Ooze',
    category: 'ooze',
    shortName: 'oo',
  },
  {
    name: 'Prime demon',
    category: 'prime-demon',
    shortName: 'pd',
  },
  {
    name: 'Rending drake',
    category: 'rending-drake',
    shortName: 'rd',
  },
  {
    name: 'Savvas icestorm',
    category: 'savvas-icestorm',
    shortName: 'si',
  },
  {
    name: 'Savvas lavaflow',
    category: 'savvas-lavaflow',
    shortName: 'sl',
  },
  {
    name: 'The sigthless eye',
    category: 'boss',
    shortName: 'bo',
  },
  {
    name: 'Spitting drake',
    category: 'spitting-drake',
    shortName: 'spd',
  },
  {
    name: 'Stone golem',
    category: 'stone-golem',
    shortName: 'sg',
  },
  {
    name: 'Sun demon',
    category: 'sun-demon',
    shortName: 'sud',
  },
  {
    name: 'Vermling scout',
    category: 'scout',
    shortName: 'sc',
  },
  {
    name: 'Vermling shaman',
    category: 'shaman',
    shortName: 'sh',
  },
  {
    name: 'Wind demon',
    category: 'wind-demon',
    shortName: 'wd',
  },
  {
    name: 'Winged horror',
    category: 'boss',
    shortName: 'bo',
  },
];

export const genMonsters = () => {
  const monsterItems = monstersConfig.map(({ name, category, shortName }) => {
    const items = [];

    // monster stat cards
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/${slugify(
        name,
        { lower: true }
      )}-0.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/${slugify(
        name,
        { lower: true }
      )}-4.png`,
      width: 200,
      label: `Stat card`,
      layer: -1,
      actions: [
        {
          name: 'rotate',
          args: {
            angle: 90,
          },
        },
        {
          name: 'flip',
        },
        {
          name: 'lock',
        },
        {
          name: 'remove',
        },
      ],
    });

    // Add sleeve
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/monster-stat-sleeve.png`,
      width: 200,
      label: `Monster stats sleeve`,
      groupId: `monster-stat-cards`,
    });

    // monster tokens
    ['normal'].forEach((monsterMode) => {
      items.push({
        type: 'advancedImage',
        front: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/${slugify(name, {
          lower: true,
        })}.png`,
        width: 60,
        text: 'X',
        layers: [
          {
            uid: 'kTAdKBHjFe',
            images: [
              {
                uid: '787rPQsjuF',
                type: 'external',
                content: `${LOCAL_IMAGE_URL_PREFIX}/src/games/gloomhaven/monster-overlay-normal.png`,
              },
              {
                uid: '787rPPQsjuF',
                type: 'external',
                content: `${LOCAL_IMAGE_URL_PREFIX}/src/games/gloomhaven/monster-overlay-elite.png`,
              },
            ],
            side: 'both',
            offset: {
              x: 0,
              y: 0,
            },
            offsetX: 0,
            offsetY: 20,
          },
          {
            uid: 'vGMVz759gh',
            images: [...Array(30).keys()].map((index) => ({
              uid: index,
              type: 'external',
              content: `${LOCAL_IMAGE_URL_PREFIX}/src/games/gloomhaven/life_${index}.png`,
            })),
            side: 'front',
            offset: {
              x: 0,
              y: 0,
            },
            offsetX: -75,
            offsetY: 100,
            value: 0,
          },
        ],
        actions: [
          {
            name: 'prevImageForLayer',
            uid: 'mq4Z3',
            args: {
              step: -1,
              layer: 1,
              customLabel: 'PV -1',
            },
          },
          {
            name: 'nextImageForLayer',
            uid: 'ZxhkP',
            args: {
              step: 1,
              layer: 1,
              customLabel: 'PV +1',
            },
          },
          {
            name: 'nextImageForLayer',
            uid: 'YxNtR',
            args: {
              step: 1,
              layer: 0,
              customLabel: 'Elite',
            },
          },
          {
            name: 'shuffle',
          },
          {
            name: 'clone',
          },
          {
            name: 'remove',
          },
        ],
        label: `Token`,
        holdItems: true,
      });
    });

    // monster ability cards
    const abilityCards = [...Array(8).keys()].map((_, index) => {
      return {
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/${slugify(
          category,
          { lower: true }
        )}/ma-${shortName}-${index + 1}.png`,
        backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/${slugify(
          category,
          { lower: true }
        )}/ma-${shortName}-back.png`,
        width: 100,
        label: `${name} ${index + 1}`,
      };
    });

    items.push({ name: 'Ability cards', items: abilityCards });

    return { name, items };
  });

  return { name: 'Monsters', items: monsterItems };
};
