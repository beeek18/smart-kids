import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SoundType } from '../../../../types/sound/SoundType';

const initialState: SoundType = {
  soundObject: null,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setSound: (state, action: PayloadAction<SoundType>) => {
      state.soundObject = action.payload;
    },
  },
});

export const { setSound } = audioSlice.actions;
export default audioSlice.reducer;
