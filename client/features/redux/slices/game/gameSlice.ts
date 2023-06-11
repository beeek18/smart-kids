import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameStateType, GameVoteType } from '../../../../types/game/GameType';
import { UserType } from '../../../../types/user/UserType';

const initialState: GameStateType = {
  status: null,
  allPlayers: [],
  round: 1,
  score: 0,
  votes: [],
};

export const gameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<UserType>) => {
      state.allPlayers = [...state.allPlayers, action.payload];
    },

    playerExit: (state, action: PayloadAction<UserType['id']>) => {
      state.allPlayers = state.allPlayers.filter((elem) => elem.id !== action.payload);
    },

    updateGameStatus: (state, action: PayloadAction<GameStateType['status']>) => {
      state.status = action.payload;
    },

    userVote: (state, action: PayloadAction<GameVoteType>) => {
      state.votes.push(action.payload);
    },

    nextRound: (state) => {
      state.round += 1;
    },

    clearAllVotes: (state) => {
      state.votes = [];
    },

    resetRoom: (state) => {
      state.status = null;
      state.allPlayers = [];
      state.votes = [];
      state.round = 1;
      state.score = 0;
    },
  },
});

export const { addPlayer, playerExit, updateGameStatus, nextRound, resetRoom } = gameSlice.actions;

export default gameSlice.reducer;
