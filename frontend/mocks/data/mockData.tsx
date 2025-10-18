import { HearthstoneMatchCreatedResponse } from "../handlers/hearthstoneApiHandlers";

//Todo, ver como exportar del BE al FE success error  y response types automaticamanete o prgoramatico
//o sencillo
type CardMatchMockScenarios = Record<string, MockScenario>;

type MockScenario = SuccessResponse | ErrorResponse;

type SuccessResponse = {
  status: 200;
  response: HearthstoneMatchCreatedResponse;
};
type ErrorResponse = {
  status: 500;
  response: {
    message: string;
  };
};

export const mulliganMockData = [
  {
    totalGames: 1,
    wins: 1,
    cardId: "DEEP_017",
    winrate: 100,
    cardName: "Mining Casualties",
    cardImageUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/DEEP_017.png",
  },
];

export const cardMatchMockScenarios: CardMatchMockScenarios = {
  "https://hsreplay.net/replay/UEpCuDvFktfgBpq6AjH4rP": {
    status: 200,
    response: {
      myClassId: "PALADIN",
      oponentClassId: "DRUID",
      numberOfTurns: "12",
      matchResult: "WIN",
      mulligan: {
        initialCardsIds: [],
        discardedCardsIds: [],
      },
    },
  },
  "https://hsreplay.net/replay/UEpCuDvFktfgBpq6AjH4rQ": {
    status: 500,
    response: {
      message: "Internal Server Error...",
    },
  },
};

export const cardSearchMockData = {
  cardId: "EDR_813",
  dbfId: 114967,
  name: "Morbid Swarm",
  cardSet: "Into the Emerald Dream",
  type: "Spell",
  rarity: "Rare",
  cost: 1,
  text: "<b>Choose One -</b> Summon two 1/1 Ants; or Spend 2 <b>Corpses</b> to deal $4_damage to a minion.",
  flavor:
    "Death Knights are masters of death who use shadow magic to control swarms of... ants?",
  artist: "  Grafit",
  collectible: true,
  playerClass: "Death Knight",
  runeCost: {
    blood: 1,
    frost: 0,
    unholy: 1,
  },
  img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5e99e20879204c7b716f9ac8d8090bca67bb2c1526986f067cca237b81f9032c.png",
  locale: "enUS",
  mechanics: [
    {
      name: "Corpse",
    },
  ],
  tokens: [
    {
      cardId: "EDR_813a",
      dbfId: 115797,
      name: "Contaminated Colony",
      cardSet: "Into the Emerald Dream",
      type: "Spell",
      cost: 1,
      text: "Summon two 1/1 Ants.",
      artist: "  Grafit",
      playerClass: "Death Knight",
      img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3f04aeb5849290606e674998436f3e9385d0db603171510991207c4e22ae5183.png",
      locale: "enUS",
    },
    {
      cardId: "EDR_813b",
      dbfId: 117525,
      name: "Bug Bites",
      cardSet: "Into the Emerald Dream",
      type: "Spell",
      cost: 1,
      text: "Spend 2 <b>Corpses</b> to deal $4 damage to a_minion.",
      artist: "  Grafit",
      playerClass: "Death Knight",
      img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/983fcb44f2a8b72640dba10facc9e64006cb1b4f9548704b2d24324a8c280906.png",
      locale: "enUS",
      mechanics: [
        {
          name: "Corpse",
        },
      ],
    },
  ],
};
