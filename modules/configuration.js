export const BSHConfiguration = {};

BSHConfiguration.armourTypes = {
	"none": {
		"name": "bsh.armour.none",
	    "rating": 0
	},
	"light": {
		"name": "bsh.armour.light",
	    "rating": 1
	},
	"medium": {
		"name": "bsh.armour.medium",
	    "rating": 2
	},
	"heavy": {
		"name": "bsh.armour.heavy",
		"rating": 3
	}
};

BSHConfiguration.backgroundList = {
	"assassin": {
		"attributes": {
			"dexterity": 1
		},
		"origin": "decadent",
		"name": "bsh.backgrounds.assassin.name",
		"unique": true
	},
	"berserker": {
		"attributes": {
			"strength": 1
		},
		"origin": "barbarian",
		"name": "bsh.backgrounds.berserker.name",
		"unique": true
	},
	"bookworm": {
		"attributes": {
			"intelligence": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.bookworm.name",
		"unique": false
	},
	"forbidden_knowledge": {
		"attributes": {
			"intelligence": 1
		},
		"origin": "decadent",
		"name": "bsh.backgrounds.forbidden_knowledge.name",
		"unique": false
	},
	"herbalist": {
		"attributes": {
			"intelligence": 1
		},
		"origin": "barbarian",
		"name": "bsh.backgrounds.herbalist.name",
		"unique": false
	},
	"hunter": {
		"attributes": {
			"dexterity": 1
		},
		"origin": "barbarian",
		"name": "bsh.backgrounds.hunter.name",
		"unique": false
	},
	"inventor": {
		"attributes": {
			"intelligence": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.inventor.name",
		"unique": true
	},
	"legionnaire": {
		"attributes": {
			"strength": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.legionnaire.name",
		"unique": false
	},
	"pit-fighter": {
		"attributes": {
			"strength": 1
		},
		"origin": "decadent",
		"name": "bsh.backgrounds.pit_fighter.name",
		"unique": false
	},
	"shaman": {
		"attributes": {
			"wisdom": 1
		},
		"origin": "barbarian",
		"name": "bsh.backgrounds.shaman.name",
		"unique": false
	},
	"snake_blood": {
		"attributes": {
			"constitution": 1
		},
		"origin": "decadent",
		"name": "bsh.backgrounds.snake_blood.name",
		"unique": false
	},
	"sophist": {
		"attributes": {
			"charisma": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.sophist.name",
		"unique": false
	},
	"storyteller": {
		"attributes": {
			"charisma": 1
		},
		"origin": "barbarian",
		"name": "bsh.backgrounds.storyteller.name",
		"unique": false
	},
	"street_urchin": {
		"attributes": {
			"dexterity": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.street_urchin.name",
		"unique": false
	},
	"surgeon": {
		"attributes": {
			"intelligence": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.surgeon.name",
		"unique": false
	},
	"swordmaster": {
		"attributes": {
			"dexterity": 1
		},
		"origin": "civilized",
		"name": "bsh.backgrounds.swordmaster.name",
		"unique": false
	},
	"vicious": {
		"attributes": {
			"strength": 1
		},
		"origin": "decadent",
		"name": "bsh.backgrounds.vicious.name",
		"unique": false
	},
	"warlock": {
		"attributes": {
			"charisma": 1
		},
		"origin": "decadent",
		"name": "bsh.backgrounds.warlock.name",
		"unique": false
	},
	"wildling": {
		"attributes": {
			"constitution": 1
		},
		"origin": "barbarian",
		"name": "bsh.backgrounds.wildling.name",
		"unique": false
	}
};

BSHConfiguration.birthList = [
  "bsh.births.1",
  "bsh.births.2",
  "bsh.births.3",
  "bsh.births.4",
  "bsh.births.5",
  "bsh.births.6",
  "bsh.births.7",
  "bsh.births.8",
  "bsh.births.9",
  "bsh.births.10",
  "bsh.births.11",
  "bsh.births.12",
  "bsh.births.13",
  "bsh.births.14",
  "bsh.births.15",
  "bsh.births.16",
  "bsh.births.17",
  "bsh.births.18",
  "bsh.births.19",
  "bsh.births.20"
];

BSHConfiguration.diceList = {
	"d4": "bsh.dice.d4",
	"d6": "bsh.dice.d6",
	"d8": "bsh.dice.d8",
	"d10": "bsh.dice.d10",
	"d12": "bsh.dice.d12",
	"d20": "bsh.dice.d20"
};

BSHConfiguration.itemRarityList = {
	"common": "bsh.rarities.common",
	"rare": "bsh.rarities.rare",
	"exotic": "bsh.rarities.exotic",
	"unique": "bsh.rarities.unique"
};

BSHConfiguration.levelSettings = [
  {level: 1, stories: 0},
  {level: 2, stories: 1},
  {level: 3, stories: 3},
  {level: 4, stories: 7},
  {level: 5, stories: 11},
  {level: 6, stories: 16},
  {level: 7, stories: 22},
  {level: 8, stories: 29},
  {level: 9, stories: 37},
  {level: 10, stories: 46},
];

BSHConfiguration.languageList = {
	"alashan": {
		"origin": "A corrupt empire.",
		"name": "bsh.languages.alashan"
	},
	"amaric": {
		"origin": "The Caliphate.",
		"name": "bsh.languages.amaric"
	},
	"askavan": {
		"origin": "A crumbling empire.",
		"name": "bsh.languages.askavan"
	},
	"chalidim": {
		"origin": "The desert tribes.",
		"name": "bsh.languages.chaladim"
	},
	"duhuang": {
		"origin": "The Forbidden City & the Eastern Principalities",
		"name": "bsh.languages.duhuang"
	},
	"jurka": {
		"origin": "The Iron Horde.",
		"name": "bsh.languages.jurka"
	},
	"naruan": {
		"origin": "The Golden Archipelago.",
		"name": "bsh.languages.naruan"
	},
	"pictish": {
		"origin": "The Picts.",
		"name": "bsh.languages.pictish"
	},
	"thyrenian": {
		"origin": "The Merchant League.",
		"name": "bsh.languages.thyrenian"
	},
	"urgic": {
		"origin": "The northern raiders.",
		"name": "bsh.languages.urgic"
	}
};

BSHConfiguration.originList = {
	"barbarian": "bsh.origins.barbarian.name",
	"civilized": "bsh.origins.civilized.name",
	"decadent": "bsh.origins.decadent.name",
};

BSHConfiguration.spellStates = {
	"available": "bsh.spells.states.available",
	"cast": "bsh.spells.states.cast",
	"unavailable": "bsh.spells.states.unavailable"
};

BSHConfiguration.summoningStates = {
	"unused": "bsh.summoning.states.unused",
	"used": "bsh.summoning.states.used"
};

BSHConfiguration.usageDieList = {
	"exhausted": "bsh.dice.exhausted",
	"d4": "bsh.dice.d4",
	"d6": "bsh.dice.d6",
	"d8": "bsh.dice.d8",
	"d10": "bsh.dice.d10",
	"d12": "bsh.dice.d12",
	"d20": "bsh.dice.d20"
};

BSHConfiguration.usageDieOptionList = {
	"d4": "bsh.dice.d4",
	"d6": "bsh.dice.d6",
	"d8": "bsh.dice.d8",
	"d10": "bsh.dice.d10",
	"d12": "bsh.dice.d12",
	"d20": "bsh.dice.d20"
};

BSHConfiguration.weaponHandsList = {
	"1": "bsh.weapons.hands.one",
	"2": "bsh.weapons.hands.two"
};

BSHConfiguration.weaponTypes = {
	"melee": "bsh.weapons.types.melee",
	"ranged": "bsh.weapons.types.ranged",
	"unarmed": "bsh.weapons.types.unarmed"
};

BSHConfiguration.yesNoList = {
	"yes": "bsh.yes",
	"no": "bsh.no"
};