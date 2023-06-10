import axios from 'axios';
import { ThunkActionCreater } from '../../store';
import { editUser, logoutUser, setUser } from './userSlice';
import { LoginType, SignUpType, UserType } from '../../../../types/user/UserType';
import { Platform } from 'react-native';
import { API_URL } from '@env';

const guestUser = {
  id: 0,
  username: '',
  img: '',
  status: 'guest',
};

export const checkUserThunk: ThunkActionCreater = () => (dispatch) => {
  axios(
    `http://${
      Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
    }:3000/api/user/check`,
  )
    .then(({ data }) => dispatch(setUser(data)))
    .catch(() => dispatch(setUser(guestUser)));
};

export const signUpThunk: ThunkActionCreater<SignUpType> = (input: SignUpType) => (dispatch) => {
  axios
    .post<UserType>(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/user/signup`,
      input,
    )
    .then(({ data }) => dispatch(setUser(data)))
    .catch(() => dispatch(setUser(guestUser)));
};

export const loginThunk: ThunkActionCreater<LoginType> = (input: LoginType) => (dispatch) => {
  axios
    .post<UserType>(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/user/login`,
      input,
    )
    .then(({ data }) => dispatch(setUser(data)))
    .catch(() => dispatch(setUser(guestUser)));
};

export const logOutThunk: ThunkActionCreater = () => (dispatch) => {
  axios(
    `http://${
      Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
    }:3000/api/user/logout`,
  )
    .then(() => {
      dispatch(logoutUser());
      dispatch(setUser(guestUser));
    })
    .catch(console.log);
};
export const editUserNameThunk: ThunkActionCreater = (input) => (dispatch) => {
  axios
    .patch(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/user/edit`,
      { username: input },
    )
    .then(({ data }) => {
      dispatch(editUser(data));
    })
    .catch((error) => console.log(error));
};
export const editUserImgThunk: ThunkActionCreater = (input) => (dispatch) => {
  axios
    .patch(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/user/edit`,
      { img: input },
    )
    .then(({ data }) => {
      dispatch(editUser(data));
    })
    .catch((error) => console.log(error));
};
