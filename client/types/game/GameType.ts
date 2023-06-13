import { UserType } from '../user/UserType';

export type RoomType = {
  AllPlayers: UserType[];
};

export type GameStateInfoType = {
  allPlayers: UserType[];
  allScores: GameAllScoreType[];
  score: number | 0;
};

export type GameVoteType = string;

export type GameAllScoreType = {
  username: string;
  score: number;
};

export type GameStatusType = GameStateInfoType & {
  status: 'InRoom' | 'InGame' | 'Finished' | null;
};

export type GameStateType = GameAllScoreType | GameStatusType;
