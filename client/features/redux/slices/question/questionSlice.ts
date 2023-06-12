import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionType } from '../../../../types/question/QuestionType';
import axios from 'axios';
import { AppThunk, ThunkActionCreater } from '../../store';
import { Platform } from 'react-native';
import { API_URL } from '@env';

export type QuestionState = QuestionType[];

const initialState: QuestionState = [];

export const QuestionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionType[]>) => action.payload,
  },
});

export const { setQuestions } = QuestionSlice.actions;

export default QuestionSlice.reducer;

export const getQuestionsThunk =
  (id: QuestionType['categoryId'], offset: number): AppThunk =>
  (dispatch) => {
    axios<QuestionType[]>(
      `http://${
        Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'
      }:3000/api/questions/${id}?offset=${offset}`,
    )
      .then(({ data }) => {
        dispatch(setQuestions(data));
      })
      .catch(console.log);
  };
