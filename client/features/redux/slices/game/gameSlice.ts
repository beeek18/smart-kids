import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  GameAllScoreType,
  GameStateType,
  GameStatusType,
  GameVoteType,
} from '../../../../types/game/GameType';
import { UserType } from '../../../../types/user/UserType';

const initialState: GameStateType = {
  status: null,
  allPlayers: [],
  round: 1,
  score: 0,
  allScores: [],
};

export const gameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<UserType>) => {
      state.allPlayers = [...state.allPlayers, action.payload];
    },

    updateGameStatus: (state, action: PayloadAction<GameStatusType['status']>) => {
      state.status = action.payload;
    },

    addPoint: (state) => {
      state.score += 1;
    },

    updateAllScores: (state, action: PayloadAction<GameAllScoreType>) => {
      state.allScores = [...state.allScores, action.payload];
    },

    nextRound: (state) => {
      state.round += 1;
    },

    resetRoom: (state) => {
      state.status = null;
      state.allPlayers = [];
      state.round = 1;
      state.score = 0;
    },
  },
});

export const { addPlayer, updateGameStatus, nextRound, resetRoom } = gameSlice.actions;

export default gameSlice.reducer;
