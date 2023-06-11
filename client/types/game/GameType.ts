import { UserType } from '../user/UserType';

export type RoomType = {
  AllPlayers: UserType[];
};

export type GameStateInfoType = {
  allPlayers: UserType[];
  score: number | 0;
  round: number | 0;
  votes: GameVoteType[];
};

export type GameVoteType = string;

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
