import axios from 'axios';
import { ThunkActionCreater } from '../../store';
import { setUser } from './userSlice';
import { LoginType, SignUpType, UserType } from '../../../../types/user/UserType';
import { Platform } from 'react-native';
import { API_URL } from '@env';

export const checkUserThunk: ThunkActionCreater = () => (dispatch) => {
  axios(
    `http://${
      Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
    }:3000/api/user/check`,
  )
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch(() => dispatch(setUser({ status: 'guest' })));
};

export const signUpThunk: ThunkActionCreater<SignUpType> = (input: SignUpType) => (dispatch) => {
  axios
    .post<UserType>(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/user/signup`,
      input,
    )
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch(() => dispatch(setUser({ status: 'guest' })));
};

export const loginThunk: ThunkActionCreater<LoginType> = (input: LoginType) => (dispatch) => {
  axios
    .post<UserType>(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/user/login`,
      input,
    )
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch(() => dispatch(setUser({ status: 'guest' })));
};

export const logOutThunk: ThunkActionCreater = () => (dispatch) => {
  axios(
    `http://${
      Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
    }:3000/api/auth/logout`,
  )
    .then(() => dispatch(setUser({ status: 'guest' })))
    .catch(() => dispatch(setUser({ status: 'logged' })));
};
