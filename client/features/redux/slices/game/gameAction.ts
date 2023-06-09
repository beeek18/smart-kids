import { GameStateType } from '../../../../types/game/GameType';
import { UserType } from '../../../../types/user/UserType';

export const joinRoomAction = (payload: UserType) => ({
  type: 'JOIN_ROOM',
  payload,
});

export const startGameAction = (payload: GameStateType['status']) => ({
  type: 'START_GAME',
  payload,
});

export const voteAction = (payload: GameStateType['score']) => ({
  type: 'VOTE',
  payload,
});
