import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ErrorType = {
  text: {
    message: '',
  },
  isError: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorType>) => {
      (state.text = action.payload.text), (state.isError = action.payload.isError);
    },
    setDefaultError: (state, action: PayloadAction<ErrorType>) => initialState,
  },
});

export const { setError,setDefaultError } = errorSlice.actions;

export default errorSlice.reducer;
