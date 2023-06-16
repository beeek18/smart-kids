import {
  GameAllScoreType,
  GameStateType,
  GameStatusType,
  GameVoteType,
} from '../../../../types/game/GameType';
import { UserType } from '../../../../types/user/UserType';

export const joinRoomAction = (payload: UserType) => ({
  type: 'JOIN_ROOM',
  payload,
});

export const leftRoomAction = (payload: UserType) => ({
  type: 'LEFT_ROOM',
  payload,
});

export const statusGameAction = (payload: GameStatusType['status']) => ({
  type: 'STATUS_GAME',
  payload,
});

export const voteAction = (payload: GameVoteType) => ({
  type: 'VOTE',
  payload,
});

export const getAllScoreAction = (payload: GameAllScoreType) => ({
  type: 'GET_ALL_SCORE',
  payload,
});
