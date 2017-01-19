Game.ItemRepository = new Game.Repository('items', Game.Item);

// Weapons
Game.ItemRepository.define('knife', {
    name: 'knife',
    character: ')',
    foreground: Game.Palette.grey,
    attackValue: 4,
    type: 'melee',
    hands: 1,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Throwable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('dagger', {
    name: 'dagger',
    character: ')',
    foreground: Game.Palette.grey,
    attackValue: 5,
    type: 'melee',
    hands: 1,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Throwable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('kukri', {
    name: 'kukri',
    character: ')',
    foreground: Game.Palette.grey,
    attackValue: 6,
    type: 'melee',
    hands: 1,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Throwable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('long sword', {
    name: 'long sword',
    character: ')',
    foreground: Game.Palette.grey,
    attackValue: 10,
    type: 'melee',
    hands: 2,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('staff', {
    name: 'staff',
    character: ')',
    foreground: 'yellow',
    attackValue: 5,
    defenseValue: 3,
    type: 'melee',
    hands: 1,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

// Guns
Game.ItemRepository.define('shotgun', {
    name: 'shotgun',
    character: '|',
    foreground: Game.Palette.gunmetal,
    attackValue: 3,
    type: 'ranged',
    hands: 2,
    clipSize: 2,
    ammoType: 'shotgun shell',
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.UsesAmmo]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('rifle', {
    name: 'rifle',
    character: '|',
    foreground: Game.Palette.gunmetal,
    attackValue: 4,
    type: 'ranged',
    hands: 2,
    clipSize: 6,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.UsesAmmo]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('pistol', {
    name: 'pistol',
    character: '|',
    foreground: Game.Palette.gunmetal,
    attackValue: 2,
    type: 'ranged',
    hands: 1,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.UsesAmmo]
}, {
    disableRandomCreation: true
});

// Ammo
Game.ItemRepository.define('lead bullet', {
    name: 'lead bullet',
    character: ':',
    foreground: Game.Palette.gunmetal,
    attackValue: 1,
    count: 5,
    type: 'ammo',
    stackable: true,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Stackable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('shotgun shell', {
    name: 'shotgun shell',
    character: ':',
    foreground: Game.Palette.gunmetal,
    attackValue: 2,
    count: 2,
    type: 'ammo',
    stackable: true,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Stackable]
}, {
    disableRandomCreation: true
});

// Throwables
Game.ItemRepository.define('grenade', {
    name: 'grenade',
    character: '*',
    foreground: Game.Palette.gunmetal,
    attackValue: 2,
    throwable: true,
    stackable: true,
    mixins: [Game.ItemMixins.Throwable, Game.ItemMixins.Stackable]
});

// Armor
Game.ItemRepository.define('tunic', {
    name: 'tunic',
    character: '[',
    foreground: 'green',
    defenseValue: 2,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('chainmail', {
    name: 'chainmail',
    character: '[',
    foreground: 'white',
    defenseValue: 4,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('platemail', {
    name: 'platemail',
    character: '[',
    foreground: 'aliceblue',
    defenseValue: 6,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('balistic vest', {
    name: 'balistic vest',
    character: '[',
    foreground: Game.Palette.grey,
    slotLocations: ['body'],
    defenseValue: 6,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

// Misc.
Game.ItemRepository.define('rock', {
    name: 'rock',
    character: '*',
    foreground: 'white',
    attackValue: 2,
    throwable: true,
    stackable: true,
    mixins: [Game.ItemMixins.Throwable, Game.ItemMixins.Stackable]
});

Game.ItemRepository.define('apple', {
    name: 'apple',
    character: '%',
    foreground: 'red',
    foodValue: 50,
    stackable: true,
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Stackable]
});

Game.ItemRepository.define('melon', {
    name: 'melon',
    character: '%',
    foreground: 'lightgreen',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

Game.ItemRepository.define('corpse', {
    name: 'corpse',
    character: '%',
    foodValue: 75,
    consumptions: 1,
    mixins: [Game.ItemMixins.Edible]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('pumpkin', {
    name: 'pumpkin',
    character: '%',
    foreground: 'orange',
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    throwable: true,
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Equippable, Game.ItemMixins.Throwable]
});
