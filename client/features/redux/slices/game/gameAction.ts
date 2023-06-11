import { GameStateType, GameVoteType } from '../../../../types/game/GameType';
import { UserType } from '../../../../types/user/UserType';

export const joinRoomAction = (payload: UserType) => ({
  type: 'JOIN_ROOM',
  payload,
});

export const startGameAction = (payload: GameStateType['status']) => ({
  type: 'START_GAME',
  payload,
});

export const voteAction = (payload: GameVoteType) => ({
  type: 'VOTE',
  payload,
});

export const clearVotes = () => ({
  type: 'CLEAR_VOTE',
});
