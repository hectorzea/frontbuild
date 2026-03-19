export interface Card {
  __v: number;
  _id: string;
  id: string;
  dbfId: number;
  name: string;
  text: string;
  flavor?: string;
  artist: string;
  attack?: number;
  cardClass: string;
  collectible?: boolean;
  cost: number;
  elite?: boolean;
  faction?: string;
  health?: number;
  mechanics: string[];
  rarity?: string;
  set: string;
  type: string;
  imageUrl: string;
}

export interface Mulligan {
  initialCardsIds: string[];
  discardedCardsIds: string[];
}

export interface Game {
  myClassId: string;
  oponentClassId: string;
  numberOfTurns: string;
  matchResult: string;
  mulligan: Mulligan;
}
