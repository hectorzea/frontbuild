import { CardMatchMockScenarios } from "./types";
import { Card } from "@/app/(frontbuild)/types";

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
  _id: "693597fa46975091c567d3e3",
  id: "TIME_619",
  name: "Talanji of the Graves",
  dbfId: 120183,
  text: "[x]<b>Fabled.</b> <b>Battlecry:</b> Draw\nBwonsamdi <i>(or resurrect\nhim if he has died)</i>. Choose\na Boon to give him.",
  flavor:
    "In one dark timeline, Talanji was struck down and raised again as a death knight. But even death can't stop her from protecting the Zandalari.",
  artist: "James Ryman",
  attack: 4,
  cardClass: "DEATHKNIGHT",
  collectible: true,
  cost: 4,
  elite: true,
  health: 5,
  mechanics: ["BATTLECRY"],
  rarity: "LEGENDARY",
  set: "TIME_TRAVEL",
  type: "MINION",
  imageUrl:
    "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619.png",
  __v: 0,
};

export const cardTokensMock: Card[] = [
  {
    _id: "693597fa46975091c567d3fb",
    id: "TIME_619t2",
    name: "What Befell Zandalar",
    dbfId: 120188,
    text: "[x]Deal $2 damage to all\nenemies. Choose a Boon\nto give to Bwonsamdi.",
    artist: "Ivo Campelo da Silva",
    cardClass: "DEATHKNIGHT",
    cost: 3,
    elite: true,
    mechanics: [],
    set: "TIME_TRAVEL",
    type: "SPELL",
    imageUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t2.png",
    __v: 0,
  },
  {
    _id: "693597fa46975091c567d3fe",
    id: "TIME_619t3",
    name: "Boon of Power",
    dbfId: 120184,
    text: "Give Bwonsamdi <b>Taunt</b> <i>permanently</i>. Minions summoned by his <b>Deathrattle</b> cost (2) more.",
    artist: "Grafit",
    cardClass: "DEATHKNIGHT",
    cost: 0,
    mechanics: [],
    set: "TIME_TRAVEL",
    type: "SPELL",
    imageUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t3.png",
    __v: 0,
  },
  {
    _id: "693597fa46975091c567d401",
    id: "TIME_619t4",
    name: "Boon of Longevity",
    dbfId: 120185,
    text: "Give Bwonsamdi <b>Lifesteal</b> <i>permanently</i>. Minions summoned by his <b>Deathrattle</b> cost (2) more.",
    artist: "Grafit",
    cardClass: "DEATHKNIGHT",
    cost: 0,
    mechanics: [],
    set: "TIME_TRAVEL",
    type: "SPELL",
    imageUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t4.png",
    __v: 0,
  },
  {
    _id: "693597fa46975091c567d404",
    id: "TIME_619t5",
    name: "Boon of Speed",
    dbfId: 120186,
    text: "Give Bwonsamdi <b>Rush</b> <i>permanently</i>. Minions summoned by his <b>Deathrattle</b> cost (2) more.",
    artist: "Grafit",
    cardClass: "DEATHKNIGHT",
    cost: 0,
    mechanics: [],
    set: "TIME_TRAVEL",
    type: "SPELL",
    imageUrl:
      "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/TIME_619t5.png",
    __v: 0,
  },
];
