import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameStateType } from '../../../../types/game/GameType';
import { UserType } from '../../../../types/user/UserType';

const initialState: GameStateType = {
  status: null,
  allPlayers: [],
  round: 1,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<UserType>) => {
      state.allPlayers.push(action.payload);
    },

    playerExit: (state, action: PayloadAction<UserType['id']>) => {
      state.allPlayers = state.allPlayers.filter((elem) => elem.id !== action.payload);
    },

    updateGameStatus: (state, action: PayloadAction<GameStateType['status']>) => {
      state.status = action.payload;
    },

    nextRound: (state) => {
      state.round += 1;
    },

    resetRoom: (state) => {
      state.status = null;
      state.allPlayers = [];
      state.round = 0;
      state.score = 0;
    },
  },
});

export const { addPlayer, playerExit, updateGameStatus, nextRound, resetRoom } = gameSlice.actions;

export default gameSlice.reducer;
