import { EXTERNAL_IMAGE_URL_PREFIX } from '../../config';

const equipmentConfig = [
  {
    name: 'Boots of striding',
    number: 1,
    imagePath: 'items/1-14/boots-of-striding.png',
  },
  {
    name: 'winged shoes',
    number: 2,
    imagePath: 'items/1-14/winged-shoes.png',
  },
  {
    name: 'Hide armor',
    number: 3,
    imagePath: 'items/1-14/hide-armor.png',
  },
  {
    name: 'Leather armor',
    number: 4,
    imagePath: 'items/1-14/leather-armor.png',
  },
  {
    name: 'Cloak of invisibility',
    number: 5,
    imagePath: 'items/1-14/cloak-of-invisibility.png',
  },
  {
    name: 'Eagle-eye goggles',
    number: 6,
    imagePath: 'items/1-14/eagle-eye-goggles.png',
  },
  {
    name: 'Iron helmet',
    number: 7,
    imagePath: 'items/1-14/iron-helmet.png',
  },
  {
    name: 'Heater shield',
    number: 8,
    imagePath: 'items/1-14/heater-shield.png',
  },
  {
    name: 'Piercing bow',
    number: 9,
    imagePath: 'items/1-14/piercing-bow.png',
  },
  {
    name: 'War hammer',
    number: 10,
    imagePath: 'items/1-14/war-hammer.png',
  },
  {
    name: 'Poison dagger',
    number: 11,
    imagePath: 'items/1-14/poison-dagger.png',
  },
  {
    name: 'Minor healing potion',
    number: 12,
    imagePath: 'items/1-14/minor-healing-potion.png',
  },
  {
    name: 'Minor stamina potion',
    number: 13,
    imagePath: 'items/1-14/minor-stamina-potion.png',
  },
  {
    name: 'Minor power potion',
    number: 14,
    imagePath: 'items/1-14/minor-power-potion.png',
  },
  {
    name: 'Boots of speed',
    number: 15,
    imagePath: 'items/15-21/boots-of-speed.png',
  },
  {
    name: 'Cloak of pockets',
    number: 16,
    imagePath: 'items/15-21/cloak-of-pockets.png',
  },
  {
    name: 'Empowering talisman',
    number: 17,
    imagePath: 'items/15-21/empowering-talisman.png',
  },
  {
    name: 'Battle-axe',
    number: 18,
    imagePath: 'items/15-21/battle-axe.png',
  },
  {
    name: 'Weighted net',
    number: 19,
    imagePath: 'items/15-21/weighted-net.png',
  },
  {
    name: 'Minor mana potion',
    number: 20,
    imagePath: 'items/15-21/minor-mana-potion.png',
  },
  {
    name: 'Stun powder',
    number: 21,
    imagePath: 'items/15-21/stun-powder.png',
  },
  {
    name: 'Heavy greaves',
    number: 22,
    imagePath: 'items/22-28/heavy-greaves.png',
  },
  {
    name: 'Chainmail',
    number: 23,
    imagePath: 'items/22-28/chainmail.png',
  },
  {
    name: 'Amulet of life',
    number: 24,
    imagePath: 'items/22-28/amulet-of-life.png',
  },
  {
    name: 'Jagged sword',
    number: 25,
    imagePath: 'items/22-28/jagged-sword.png',
  },
  {
    name: 'Long spear',
    number: 26,
    imagePath: 'items/22-28/long-spear.png',
  },
  {
    name: 'Major healing potion',
    number: 27,
    imagePath: 'items/22-28/major-healing-potion.png',
  },
  {
    name: 'Moon earring',
    number: 28,
    imagePath: 'items/22-28/moon-earring.png',
  },
  {
    name: 'Comfortable shoes',
    number: 29,
    imagePath: 'items/29-35/comfortable-shoes.png',
  },
  {
    name: 'Studded leather',
    number: 30,
    imagePath: 'items/29-35/studded-leather.png',
  },
  {
    name: 'Hawk helm',
    number: 31,
    imagePath: 'items/29-35/hawk-helm.png',
  },
  {
    name: 'Tower shield',
    number: 32,
    imagePath: 'items/29-35/tower-shield.png',
  },
  {
    name: 'Volatile bomb',
    number: 33,
    imagePath: 'items/29-35/volatile-bomb.png',
  },
  {
    name: 'Major stamina potion',
    number: 34,
    imagePath: 'items/29-35/major-stamina-potion.png',
  },
  {
    name: 'Falcon figurine',
    number: 35,
    imagePath: 'items/29-35/falcon-figurine.png',
  },
  {
    name: 'Boots of dashing',
    number: 36,
    imagePath: 'items/36-42/boots-of-dashing.png',
  },
  {
    name: 'Robes of evocation',
    number: 37,
    imagePath: 'items/36-42/robes-of-evocation.png',
  },
  {
    name: 'Heavy basinet',
    number: 38,
    imagePath: 'items/36-42/heavy-basinet.png',
  },
  {
    name: 'Hooked chain',
    number: 39,
    imagePath: 'items/36-42/hooked-chain.png',
  },
  {
    name: 'Versatile dagger',
    number: 40,
    imagePath: 'items/36-42/versatile-dagger.png',
  },
  {
    name: 'Major power potion',
    number: 41,
    imagePath: 'items/36-42/major-power-potion.png',
  },
  {
    name: 'Ring of haste',
    number: 42,
    imagePath: 'items/36-42/ring-of-haste.png',
  },
  {
    name: 'Boots of quickness',
    number: 43,
    imagePath: 'items/43-49/boots-of-quickness.png',
  },
  {
    name: 'Splintmail',
    number: 44,
    imagePath: 'items/43-49/splintmail.png',
  },
  {
    name: 'Pendant of dark pacts',
    number: 45,
    imagePath: 'items/43-49/pendant-of-dark-pacts.png',
  },
  {
    name: 'Spiked shield',
    number: 46,
    imagePath: 'items/43-49/spiked-shield.png',
  },
  {
    name: 'Reaping scythe',
    number: 47,
    imagePath: 'items/43-49/reaping-scythe.png',
  },
  {
    name: 'Major mana potion',
    number: 48,
    imagePath: 'items/43-49/major-mana-potion.png',
  },
  {
    name: 'Sun earring',
    number: 49,
    imagePath: 'items/43-49/sun-earring.png',
  },
  {
    name: 'Steel sabatons',
    number: 50,
    imagePath: 'items/50-56/steel-sabatons.png',
  },
  {
    name: 'Shadow armor',
    number: 51,
    imagePath: 'items/50-56/shadow-armor.png',
  },
  {
    name: 'Protective charm',
    number: 52,
    imagePath: 'items/50-56/protective-charm.png',
  },
  {
    name: 'Black knife',
    number: 53,
    imagePath: 'items/50-56/black-knife.png',
  },
  {
    name: 'Staff of eminence',
    number: 54,
    imagePath: 'items/50-56/staff-of-eminence.png',
  },
  {
    name: 'super healing potion',
    number: 55,
    imagePath: 'items/50-56/super-healing-potion.png',
  },
  {
    name: 'Ring of brutality',
    number: 56,
    imagePath: 'items/50-56/ring-of-brutality.png',
  },
  {
    name: 'Serene sandals',
    number: 57,
    imagePath: 'items/57-63/serene-sandals.png',
  },
  {
    name: 'Cloak of phasing',
    number: 58,
    imagePath: 'items/57-63/cloak-of-phasing.png',
  },
  {
    name: 'Telescopic lens',
    number: 59,
    imagePath: 'items/57-63/telescopic-lens.png',
  },
  {
    name: 'Unstable explosives',
    number: 60,
    imagePath: 'items/57-63/unstable-explosives.png',
  },
  {
    name: 'Wall shield',
    number: 61,
    imagePath: 'items/57-63/wall-shield.png',
  },
  {
    name: 'Doom powder',
    number: 62,
    imagePath: 'items/57-63/doom-powder.png',
  },
  {
    name: 'Lucky eye',
    number: 63,
    imagePath: 'items/57-63/lucky-eye.png',
  },
  {
    name: 'Boots of sprinting',
    number: 64,
    imagePath: 'items/64-151/boots-of-sprinting.png',
  },
  {
    name: 'Platemail',
    number: 65,
    imagePath: 'items/64-151/platemail.png',
  },
  {
    name: 'Mask of terror',
    number: 66,
    imagePath: 'items/64-151/mask-of-terror.png',
  },
  {
    name: 'Balanced blade',
    number: 67,
    imagePath: 'items/64-151/balanced-blade.png',
  },
  {
    name: 'Halberd',
    number: 68,
    imagePath: 'items/64-151/halberd.png',
  },
  {
    name: 'Star earring',
    number: 69,
    imagePath: 'items/64-151/star-earring.png',
  },
  {
    name: 'Second chance ring',
    number: 70,
    imagePath: 'items/64-151/second-chance-ring.png',
  },
  {
    name: 'Boots of levitation',
    number: 71,
    imagePath: 'items/64-151/boots-of-levitation.png',
  },
  {
    name: 'Shoes of happiness',
    number: 72,
    imagePath: 'items/64-151/shoes-of-happiness.png',
  },
  {
    name: 'Blinking cape',
    number: 73,
    imagePath: 'items/64-151/blinking-cape.png',
  },
  {
    name: 'Swordedge armor',
    number: 74,
    imagePath: 'items/64-151/swordedge-armor.png',
  },
  {
    name: 'Circlet of elements',
    number: 75,
    imagePath: 'items/64-151/circlet-of-elements.png',
  },
  {
    name: 'Chain hood',
    number: 76,
    imagePath: 'items/64-151/chain-hood.png',
  },
  {
    name: 'Frigid blade',
    number: 77,
    imagePath: 'items/64-151/frigid-blade.png',
  },
  {
    name: 'Storm blade',
    number: 78,
    imagePath: 'items/64-151/storm-blade.png',
  },
  {
    name: 'Inferno blade',
    number: 79,
    imagePath: 'items/64-151/inferno-blade.png',
  },
  {
    name: 'Tremor blade',
    number: 80,
    imagePath: 'items/64-151/tremor-blade.png',
  },
  {
    name: 'Brilliant blade',
    number: 81,
    imagePath: 'items/64-151/brilliant-blade.png',
  },
  {
    name: 'Night blade',
    number: 82,
    imagePath: 'items/64-151/night-blade.png',
  },
  {
    name: 'Wand of frost',
    number: 83,
    imagePath: 'items/64-151/wand-of-frost.png',
  },
  {
    name: 'Wand of storms',
    number: 84,
    imagePath: 'items/64-151/wand-of-storms.png',
  },
  {
    name: 'Wand of infernos',
    number: 85,
    imagePath: 'items/64-151/wand-of-infernos.png',
  },
  {
    name: 'Wand of tremors',
    number: 86,
    imagePath: 'items/64-151/wand-of-tremors.png',
  },
  {
    name: 'Wand of brilliance',
    number: 87,
    imagePath: 'items/64-151/wand-of-brilliance.png',
  },
  {
    name: 'Wand of darkness',
    number: 88,
    imagePath: 'items/64-151/wand-of-darkness.png',
  },
  {
    name: 'Minor cure potion',
    number: 89,
    imagePath: 'items/64-151/minor-cure-potion.png',
  },
  {
    name: 'Major cure potion',
    number: 90,
    imagePath: 'items/64-151/major-cure-potion.png',
  },
  {
    name: 'Steel ring',
    number: 91,
    imagePath: 'items/64-151/steel-ring.png',
  },
  {
    name: 'Dampening ring',
    number: 92,
    imagePath: 'items/64-151/dampening-ring.png',
  },
  {
    name: 'Scroll of power',
    number: 93,
    imagePath: 'items/64-151/scroll-of-power.png',
  },
  {
    name: 'Scroll of healing',
    number: 94,
    imagePath: 'items/64-151/scroll-of-healing.png',
  },
  {
    name: 'Scroll of stamina',
    number: 95,
    imagePath: 'items/64-151/scroll-of-stamina.png',
  },
  {
    name: 'Rocket boots',
    number: 96,
    imagePath: 'items/64-151/rocket-boots.png',
  },
  {
    name: 'Endurance footwraps',
    number: 97,
    imagePath: 'items/64-151/endurance-footwraps.png',
  },
  {
    name: 'Drakescale boots',
    number: 98,
    imagePath: 'items/64-151/drakescale-boots.png',
  },
  {
    name: 'Magma waders',
    number: 99,
    imagePath: 'items/64-151/magma-waders.png',
  },
  {
    name: 'Robes of summoning',
    number: 100,
    imagePath: 'items/64-151/robes-of-summoning.png',
  },
  {
    name: 'Second skin',
    number: 101,
    imagePath: 'items/64-151/second-skin.png',
  },
  {
    name: 'Sacrificial robes',
    number: 102,
    imagePath: 'items/64-151/sacrificial-robes.png',
  },
  {
    name: 'Drakescale armor',
    number: 103,
    imagePath: 'items/64-151/drakescale-armor.png',
  },
  {
    name: 'steam armor',
    number: 104,
    imagePath: 'items/64-151/steam-armor.png',
  },
  {
    name: 'Flea-bitten shawl',
    number: 105,
    imagePath: 'items/64-151/flea-bitten-shawl.png',
  },
  {
    name: 'Necklace of teeth',
    number: 106,
    imagePath: 'items/64-151/necklace-of-teeth.png',
  },
  {
    name: 'Horned helm',
    number: 107,
    imagePath: 'items/64-151/horned-helm.png',
  },
  {
    name: 'Drakescale helm',
    number: 108,
    imagePath: 'items/64-151/drakescale-helm.png',
  },
  {
    name: "Thief's hood",
    number: 109,
    imagePath: 'items/64-151/thiefs-hood.png',
  },
  {
    name: 'Helm of the mountain',
    number: 110,
    imagePath: 'items/64-151/helm-of-the-mountain.png',
  },
  {
    name: 'Wave crest',
    number: 111,
    imagePath: 'items/64-151/wave-crest.png',
  },
  {
    name: 'Ancient drill',
    number: 112,
    imagePath: 'items/64-151/ancient-drill.png',
  },
  {
    name: 'Skullbane axe',
    number: 113,
    imagePath: 'items/64-151/skullbane-axe.png',
  },
  {
    name: 'Staff of xorn',
    number: 114,
    imagePath: 'items/64-151/staff-of-xorn.png',
  },
  {
    name: 'Mountain hammer',
    number: 115,
    imagePath: 'items/64-151/mountain-hammer.png',
  },
  {
    name: 'Fueled falchion',
    number: 116,
    imagePath: 'items/64-151/fueled-falchion.png',
  },
  {
    name: 'Bloody axe',
    number: 117,
    imagePath: 'items/64-151/bloody-axe.png',
  },
  {
    name: 'Staff of elements',
    number: 118,
    imagePath: 'items/64-151/staff-of-elements.png',
  },
  {
    name: 'Skull of hatred',
    number: 119,
    imagePath: 'items/64-151/skull-of-hatred.png',
  },
  {
    name: 'Staff of summoning',
    number: 120,
    imagePath: 'items/64-151/staff-of-summoning.png',
  },
  {
    name: 'Orb of dawn',
    number: 121,
    imagePath: 'items/64-151/orb-of-dawn.png',
  },
  {
    name: 'Orb of twilight',
    number: 122,
    imagePath: 'items/64-151/orb-of-twilight.png',
  },
  {
    name: 'Ring of skulls',
    number: 123,
    imagePath: 'items/64-151/ring-of-skulls.png',
  },
  {
    name: 'Doomed compass',
    number: 124,
    imagePath: 'items/64-151/doomed-compass.png',
  },
  {
    name: 'Curious gear',
    number: 125,
    imagePath: 'items/64-151/curious-gear.png',
  },
  {
    name: 'Remote spider',
    number: 126,
    imagePath: 'items/64-151/remote-spider.png',
  },
  {
    name: 'Giant remote spider',
    number: 127,
    imagePath: 'items/64-151/giant-remote-spider.png',
  },
  {
    name: 'Black censer',
    number: 128,
    imagePath: 'items/64-151/black-censer.png',
  },
  {
    name: 'Black card',
    number: 129,
    imagePath: 'items/64-151/black-card.png',
  },
  {
    name: 'Helix ring',
    number: 130,
    imagePath: 'items/64-151/helix-ring.png',
  },
  {
    name: 'Heart of the betrayer',
    number: 131,
    imagePath: 'items/64-151/heart-of-the-betrayer.png',
  },
  {
    name: 'Power core',
    number: 132,
    imagePath: 'items/64-151/power-core.png',
  },
  {
    name: 'Resonant crystal',
    number: 133,
    imagePath: 'items/64-151/resonant-crystal.png',
  },
  {
    name: 'Imposing blade',
    number: 134,
    imagePath: 'items/64-151/imposing-blade.png',
  },
  {
    name: 'Focusing ray',
    number: 135,
    imagePath: 'items/64-151/focusing-ray.png',
  },
  {
    name: 'Volatile elixir',
    number: 136,
    imagePath: 'items/64-151/volatile-elixir.png',
  },
  {
    name: 'Silent stiletto',
    number: 137,
    imagePath: 'items/64-151/silent-stiletto.png',
  },
  {
    name: 'Stone charm',
    number: 138,
    imagePath: 'items/64-151/stone-charm.png',
  },
  {
    name: 'Psychic knife',
    number: 139,
    imagePath: 'items/64-151/psychic-knife.png',
  },
  {
    name: 'Sun shield',
    number: 140,
    imagePath: 'items/64-151/sun-shield.png',
  },
  {
    name: 'Utility belt',
    number: 141,
    imagePath: 'items/64-151/utility-belt.png',
  },
  {
    name: 'Phasing idol',
    number: 142,
    imagePath: 'items/64-151/phasing-idol.png',
  },
  {
    name: 'Smoke elixir',
    number: 143,
    imagePath: 'items/64-151/smoke-elixir.png',
  },
  {
    name: 'Pendant of the plague',
    number: 144,
    imagePath: 'items/64-151/pendant-of-the-plague.png',
  },
  {
    name: 'Mask of death',
    number: 145,
    imagePath: 'items/64-151/mask-of-death.png',
  },
  {
    name: "Master's lute",
    number: 146,
    imagePath: 'items/64-151/masters-lute.png',
  },
  {
    name: 'Cloak of the hunter',
    number: 147,
    imagePath: 'items/64-151/cloak-of-the-hunter.png',
  },
  {
    name: "Doctor's coat",
    number: 148,
    imagePath: 'items/64-151/doctors-coat.png',
  },
  {
    name: 'Elemental boots',
    number: 149,
    imagePath: 'items/64-151/elemental-boots.png',
  },
  {
    name: 'Staff of command',
    number: 150,
    imagePath: 'items/64-151/staff-of-command.png',
  },
  {
    name: 'sword of the sands',
    number: 151,
    imagePath: 'items/64-151/sword-of-the-sands.png',
  },
  {
    name: 'Ring of duality',
    number: 152,
    imagePath: 'items/152-165/ring-of-duality.png',
  },
  {
    name: 'Minor antidote',
    number: 153,
    imagePath: 'items/152-165/minor-antidote.png',
  },
  {
    name: 'Major antidote',
    number: 154,
    imagePath: 'items/152-165/major-antidote.png',
  },
  {
    name: 'Curseward armor',
    number: 155,
    imagePath: 'items/152-165/curseward-armor.png',
  },
  {
    name: 'Elemental claymore',
    number: 156,
    imagePath: 'items/152-165/elemental-claymore.png',
  },
  {
    name: 'Ancient bow',
    number: 157,
    imagePath: 'items/152-165/ancient-bow.png',
  },
  {
    name: 'Rejunevation greaves',
    number: 158,
    imagePath: 'items/152-165/rejuvenation-greaves.png',
  },
  {
    name: 'Scroll of haste',
    number: 159,
    imagePath: 'items/152-165/scroll-of-haste.png',
  },
  {
    name: 'Cutpurse dagger',
    number: 160,
    imagePath: 'items/152-165/cutpurse-dagger.png',
  },
  {
    name: 'Throwing axe',
    number: 161,
    imagePath: 'items/152-165/throwing-axe.png',
  },
  {
    name: 'Rift device',
    number: 162,
    imagePath: 'items/152-165/rift-device.png',
  },
  {
    name: 'Crystal tiara',
    number: 163,
    imagePath: 'items/152-165/crystal-tiara.png',
  },
  {
    name: 'Basin of prophecy',
    number: 164,
    imagePath: 'items/152-165/basin-of-prophecy.png',
  },
  {
    name: 'Living armor',
    number: 165,
    imagePath: 'items/152-165/living-armor.png',
  },
];

export const genEquipment = () => {
  const items = [];

  equipmentConfig.forEach((equipment) => {
    const number = equipment.number.toString().padStart(3, '0');
    items.push({
      type: 'image',
      content: `${EXTERNAL_IMAGE_URL_PREFIX}/${equipment.imagePath}`,
      flipped: true,
      width: 50,
      label: `${number}: ${equipment.name}`,
    });
  });

  return { name: 'Items', items };
};
