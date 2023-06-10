import { PlayerType } from './PlayerType';

export type RoomType = {
  AllPlayers: PlayerType[];
};

export type GameStateInfoType = {
  allPlayers: PlayerType[];
  score: number;
  round: number | 0;
};

export type GameStateInRoomType = GameStateInfoType & {
  status: 'InRoom';
};

export type GameStateInGameType = GameStateInfoType & {
  status: 'InGame';
};

export type GameStateFinishedType = GameStateInfoType & {
  status: 'Finished';
};

export type GameStateNullType = GameStateInfoType & {
  status: null;
};

export type GameStateType =
  | GameStateInRoomType
  | GameStateInGameType
  | GameStateFinishedType
  | GameStateNullType;
