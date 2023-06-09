import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchingUserType, UserType } from '../../../../types/user/UserType';

const initialState: FetchingUserType & { id: number } = {
  id: 0,
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FetchingUserType & { id: number }>) => action.payload,
    logoutUser: (state) => ({ status: 'guest', id: 0 }),
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
