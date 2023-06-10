import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../../../types/user/UserType';

const initialState: UserType = {
  id: 0,
  username: '',
  img: '',
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => action.payload,
    logoutUser: (state) => initialState,
    editUser: (state, action: PayloadAction<UserType['username']>) => {
      state.username = action.payload;
    },
  },
});

export const { setUser, logoutUser, editUser } = userSlice.actions;

export default userSlice.reducer;
