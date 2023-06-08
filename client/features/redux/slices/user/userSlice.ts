import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchingUserType, UserType } from '../../../../types/user/UserType';

const initialState: FetchingUserType = {
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserType,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => action.payload,
    logoutUser: (state) => ({ status: 'guest' }),
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
