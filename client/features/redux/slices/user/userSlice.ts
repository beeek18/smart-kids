import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../../../types/user/UserType';

const initialState: UserType = {
  id: 0,
  username: '',
  img: '',
  status: 'fetching',
  crown: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => action.payload,
    addCrown: (state, action: PayloadAction<UserType>) => {
      state.crown = action.payload.crown;
    },
    logoutUser: (state) => initialState,
    editUser: (state, action: PayloadAction<UserType>) => {
      state.username = action.payload.username;
    },
    editImg: (state, action: PayloadAction<UserType>) => {
      state.img = action.payload.img;
    },
  },
});

export const { setUser, addCrown, logoutUser, editUser, editImg } = userSlice.actions;

export default userSlice.reducer;
