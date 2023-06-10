import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EditUserType, FetchingUserType, UserType } from '../../../../types/user/UserType';

const initialState: FetchingUserType & { id: number } = {
  id: 0,
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => action.payload,
    logoutUser: (state) => ({ status: 'guest' }),
    editUser: (state, action: PayloadAction<EditUserType>) => {
      state.username = action.payload.username;
    },
  },
});

export const { setUser, logoutUser, editUser } = userSlice.actions;

export default userSlice.reducer;
