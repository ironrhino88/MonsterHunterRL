Game.EntityRepository = new Game.Repository('entities', Game.Entity);

// Player characters
Game.EntityRepository.define('Owen', {
    name: 'Owen',
    character: '@',
    foreground: Game.Palette.white,
    str: 2,
    dex: 1,
    int: 1,
    will: 2,
    per: 1,
    tough: 2,
    odd: 1,
    maxHp: 40,
    attackValue: 10,
    sightRadius: 6,
    inventorySlots: 22,
    items: ['kukri', 'grenade', 'grenade', 'shotgun shell'],
    equipment: {
        rightHand: 'shotgun'
    },
    mixins: [
        Game.EntityMixins.Sight,
        Game.EntityMixins.PlayerActor,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.Equipper,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.RangedAttacker,
        Game.EntityMixins.FoodConsumer,
        Game.EntityMixins.InventoryHolder,
        Game.EntityMixins.MessageRecipient,
        Game.EntityMixins.PlayerStatGainer,
        Game.EntityMixins.Thrower,
        Game.EntityMixins.ExperienceGainer
    ]
}, {
    disableRandomCreation: true
});
Game.EntityRepository.define('Julie', {
    name: 'Julie',
    character: '@',
    foreground: Game.Palette.blue,
    str: 0,
    dex: 4,
    int: 3,
    will: 1,
    per: 2,
    tough: 0,
    odd: 0,
    maxHp: 40,
    attackValue: 10,
    sightRadius: 6,
    inventorySlots: 22,
    items: ['rifle', 'lead bullet'],
    equipment: {
        rightHand: 'pistol',
        leftHand: 'knife'
    },
    mixins: [
        Game.EntityMixins.Sight,
        Game.EntityMixins.PlayerActor,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.Equipper,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.RangedAttacker,
        Game.EntityMixins.FoodConsumer,
        Game.EntityMixins.InventoryHolder,
        Game.EntityMixins.MessageRecipient,
        Game.EntityMixins.PlayerStatGainer,
        Game.EntityMixins.Thrower,
        Game.EntityMixins.ExperienceGainer
    ]
}, {
    disableRandomCreation: true
});
Game.EntityRepository.define('Franks', {
    name: 'Franks',
    character: '@',
    foreground: Game.Palette.green,
    str: 4,
    dex: 1,
    int: 0,
    will: 1,
    per: -1,
    tough: 4,
    odd: 1,
    maxHp: 40,
    attackValue: 10,
    sightRadius: 6,
    inventorySlots: 22,
    items: ['lead bullet'],
    equipment: {
        rightHand: 'long sword',
        leftHand: 'pistol',
        body: 'balistic vest'
    },
    mixins: [
        Game.EntityMixins.Sight, 
        Game.EntityMixins.PlayerActor, 
        Game.EntityMixins.Destructible,
        Game.EntityMixins.Equipper,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.RangedAttacker,
        Game.EntityMixins.FoodConsumer,
        Game.EntityMixins.InventoryHolder,
        Game.EntityMixins.MessageRecipient,
        Game.EntityMixins.PlayerStatGainer,
        Game.EntityMixins.Thrower,
        Game.EntityMixins.ExperienceGainer
    ]
}, {
    disableRandomCreation: true
});
Game.EntityRepository.define('Chastity', {
    name: 'Chastity',
    character: '@',
    foreground: Game.Palette.white,
    str: 0,
    dex: 3,
    int: 1,
    will: 1,
    per: 2,
    tough: 0,
    odd: 3,
    maxHp: 40,
    attackValue: 10,
    sightRadius: 6,
    inventorySlots: 22,
    items: ['arrow', 'arrow'],
    equipment: {
        rightHand: 'bow'
    },
    mixins: [
        Game.EntityMixins.Sight,
        Game.EntityMixins.PlayerActor,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.Equipper,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.RangedAttacker,
        Game.EntityMixins.FoodConsumer,
        Game.EntityMixins.InventoryHolder,
        Game.EntityMixins.MessageRecipient,
        Game.EntityMixins.PlayerStatGainer,
        Game.EntityMixins.Thrower,
        Game.EntityMixins.ExperienceGainer
    ]
}, {
    disableRandomCreation: true
});
Game.EntityRepository.define('Mitchell', {
    name: 'Mitchell',
    character: '@',
    foreground: Game.Palette.white,
    str: 0,
    dex: 0,
    int: 4,
    will: 2,
    per: 0,
    tough: 0,
    odd: 4,
    maxHp: 40,
    attackValue: 10,
    sightRadius: 6,
    inventorySlots: 22,
    mixins: [
        Game.EntityMixins.Sight,
        Game.EntityMixins.PlayerActor,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.Equipper,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.RangedAttacker,
        Game.EntityMixins.FoodConsumer,
        Game.EntityMixins.InventoryHolder,
        Game.EntityMixins.MessageRecipient,
        Game.EntityMixins.PlayerStatGainer,
        Game.EntityMixins.Thrower,
        Game.EntityMixins.ExperienceGainer
    ]
}, {
    disableRandomCreation: true
});

// Monsters
Game.EntityRepository.define('fungus', {
    name: 'fungus',
    character: 'F',
    foreground: 'green',
    maxHp: 10,
    speed: 250,
    mixins: [
        Game.EntityMixins.FungusActor,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('gnome', {
    name: 'gnome',
    character: 'g',
    foreground: Game.Palette.yellow,
    maxHp: 5,
    attackValue: 4,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('bat', {
    name: 'bat',
    character: 'B',
    foreground: 'white',
    maxHp: 4,
    attackValue: 2,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('zombie', {
    name: 'zombie',
    character: 'z',
    foreground: Game.Palette.green,
    maxHp: 10,
    attackValue: 3,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('orc', {
    name: 'orc',
    character: 'o',
    foreground: Game.Palette.green,
    maxHp: 14,
    attackValue: 4,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('wight', {
    name: 'wight',
    character: 'w',
    foreground: Game.Palette.white,
    maxHp: 20,
    attackValue: 4,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('troll', {
    name: 'troll',
    character: 't',
    foreground: Game.Palette.blue,
    maxHp: 20,
    attackValue: 5,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('werewolf', {
    name: 'werewolf',
    character: 'W',
    foreground: Game.Palette.brown,
    maxHp: 30,
    attackValue: 3,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('vampire', {
    name: 'vampire',
    character: 'V',
    foreground: Game.Palette.purple,
    maxHp: 22,
    attackValue: 4,
    speed: 2000,
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});

Game.EntityRepository.define('slime', {
    name: 'slime',
    character: 's',
    foreground: 'lightGreen',
    maxHp: 10,
    attackValue: 4,
    sightRadius: 3,
    tasks: ['hunt', 'wander'],
    mixins: [
        Game.EntityMixins.TaskActor,
        Game.EntityMixins.Sight,
        Game.EntityMixins.MeleeAttacker,
        Game.EntityMixins.Destructible,
        Game.EntityMixins.CorpseDropper,
        Game.EntityMixins.ExperienceGainer,
        Game.EntityMixins.RandomStatGainer
    ]
});
