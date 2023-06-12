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

    addPoint: (state) => {
      state.score += 1;
    },

    updateGameStatus: (state, action: PayloadAction<GameStatusType['status']>) => {
      state.status = action.payload;
    },

    updateAllScores: (state, action: PayloadAction<GameAllScoreType>) => {
      state.allScores = [...state.allScores, action.payload];
    },

    resetRoom: (state) => {
      state.status = null;
      state.allPlayers = [];
      state.allScores = [];
      state.score = 0;
    },
  },
});

export const { addPlayer, addPoint, updateGameStatus, updateAllScores, nextRound, resetRoom } =
  gameSlice.actions;

export default gameSlice.reducer;
