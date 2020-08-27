import slugify from 'slugify';

import { EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

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
  const items = [];
  const monsterModes = ['normal', 'elite'];

  monstersConfig.forEach((monster) => {
    // monster tokens
    monsterModes.forEach((monsterMode) => {
      items.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/${slugify(
          monster.name,
          { lower: true }
        )}.png`,
        width: 60,
        text: 'X',
        overlay: {
          content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-tokens/${monsterMode}-monster-overlay.svg`,
        },
        label: `${monster.name} ${monsterMode}`,
        groupId: 'monster-tokens',
      });
    });

    // monster stat cards
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/${slugify(
        monster.name,
        { lower: true }
      )}-0.png`,
      backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/${slugify(
        monster.name,
        { lower: true }
      )}-4.png`,
      width: 200,
      label: `${monster.name}`,
      groupId: `monster-stat-cards`,
    });

    // monster ability cards
    [...Array(8).keys()].forEach((_, index) => {
      items.push({
        type: 'image',
        content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/${slugify(
          monster.category,
          { lower: true }
        )}/ma-${monster.shortName}-${index + 1}.png`,
        backContent: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-ability-cards/${slugify(
          monster.category,
          { lower: true }
        )}/ma-${monster.shortName}-back.png`,
        width: 100,
        label: `${monster.name} ${index + 1}`,
        groupId: `monster-ability-cards`,
      });
    });
  });

  items.push({
    type: 'image',
    content: `${EXTERNAL_IMAGE_URL_PREFIX}/monster-stat-cards/monster-stat-sleeve.png`,
    width: 200,
    label: `Monster stats sleeve`,
    groupId: `monster-stat-cards`,
  });

  return items;
};
