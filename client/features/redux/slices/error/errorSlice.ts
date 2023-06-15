import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const defaultError: ErrorType = {
  text: {
    message: '',
  },
  isError: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState: defaultError,
  reducers: {
    setError: (state, action: PayloadAction<ErrorType>) => {
      (state.text = action.payload.text), (state.isError = action.payload.isError);
    },
    setDefaultError: (state, action: PayloadAction<ErrorType>) => action.payload,
  },
});

export const { setError, setDefaultError } = errorSlice.actions;

export default errorSlice.reducer;
