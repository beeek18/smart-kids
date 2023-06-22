import axios from 'axios';
import { LoginType, SignUpType, UserType } from '../../../../types/user/UserType';
import { AppThunk } from '../../store';
import { setDefaultError, setError } from '../error/errorSlice';
import { addCrown, editImg, editUser, logoutUser, setUser } from './userSlice';

const guestUser = {
  id: 0,
  username: '',
  img: '',
  status: 'fetching',
  crown: 0,
};

const initialState = {
  text: {
    message: '',
  },
  isError: false,
};

export const checkUserThunk = (): AppThunk => (dispatch) => {
  axios(`http://localhost:3000/api/user/check`)
    .then(({ data }) => dispatch(setUser(data)))
    .catch(() => dispatch(setUser(guestUser)));
};

export const signUpThunk =
  (input: SignUpType): AppThunk =>
  (dispatch) => {
    axios
      .post<UserType>(`http://localhost:3000/api/user/signup`, input)
      .then(({ data }) => {
        dispatch(setDefaultError(initialState));
        dispatch(setUser(data));
      })
      .catch((error) => {
        dispatch(setError({ text: error.response.data, isError: true }));
        dispatch(setUser(guestUser));
      });
  };

export const loginThunk =
  (input: LoginType): AppThunk =>
  (dispatch) => {
    axios
      .post<UserType>(`http://localhost:3000/api/user/login`, input)
      .then(({ data }) => {
        dispatch(setDefaultError(initialState));
        dispatch(setUser(data));
      })
      .catch((error) => {
        dispatch(setError({ text: error.response.data, isError: true }));
        dispatch(setUser(guestUser));
      });
  };

export const logOutThunk = (): AppThunk => (dispatch) => {
  axios(`http://localhost:3000/api/user/logout`)
    .then(() => {
      dispatch(logoutUser());
    })
    .catch(console.log);
};
export const editUserNameThunk =
  (input: UserType['username']): AppThunk =>
  (dispatch) => {
    axios
      .patch(`http://localhost:3000/api/user/edit`, { username: input })
      .then(({ data }) => {
        dispatch(editUser(data));
      })
      .catch((error) => console.log(error));
  };
export const editUserImgThunk =
  (input: UserType['img']): AppThunk =>
  (dispatch) => {
    axios
      .patch(`http://localhost:3000/api/user/edit/avatar`, { img: input })
      .then(({ data }) => {
        dispatch(editImg(data));
      })
      .catch((error) => console.log(error));
  };

export const addCrownUserThunk =
  (id: UserType['id']): AppThunk =>
  (dispatch) => {
    axios
      .patch(`http://localhost:3000/api/user/${id}/add/crown`)
      .then(({ data }) => {
        dispatch(addCrown(data));
      })
      .catch((error) => console.log(error));
  };
