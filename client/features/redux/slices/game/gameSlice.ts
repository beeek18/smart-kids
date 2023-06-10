import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameStateType } from '../../../../types/game/GameType';
import { PlayerType } from '../../../../types/game/PlayerType';

const initialState: GameStateType = {
  status: null,
  allPlayers: [],
  round: 1,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'Game',
  initialState: initialState,
  reducers: {
    setPlayerList: (state, action: PayloadAction<PlayerType[]>) => {
      state.allPlayers = action.payload;
    },

    addPlayer: (state, action: PayloadAction<PlayerType>) => {
      state.allPlayers.push(action.payload);
    },

    playerExit: (state, action: PayloadAction<PlayerType['id']>) => {
      state.allPlayers = state.allPlayers.filter((elem) => elem.id !== action.payload);
    },

    updatePlayers: (state, action: PayloadAction<PlayerType>) => {
      state.allPlayers = state.allPlayers.map((elem) =>
        elem.id === action.payload.id ? action.payload : elem,
      );
    },

    updateGameStatus: (state, action: PayloadAction<GameStateType['status']>) => {
      state.status = action.payload;
    },

    setupRoom: (state, action: PayloadAction<{ userid: number }>) => {
      state.userid = action.payload.userid;
    },

    nextRound: (state) => {
      state.round += 1;
    },

    resetRoom: (state) => {
      state.status = null;
      state.allPlayers = [];
      state.round = 0;
    },

    userVote: (state, action) => {
      state.vote.push(action.payload);
    },
  },
});

export const {
  setPlayerList,
  playerExit,
  updatePlayers,
  updateGameStatus,
  setupRoom,
  nextRound,
  resetRoom,
  userVote,
} = gameSlice.actions;

export default gameSlice.reducer;
