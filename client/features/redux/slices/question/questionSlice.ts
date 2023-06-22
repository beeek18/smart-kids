import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { QuestionType } from '../../../../types/question/QuestionType';
import { AppThunk } from '../../store';

export type QuestionState = QuestionType;

const initialState: QuestionState = {
  id: 0,
  title: '',
  answer: '',
  img: '',
  categoryId: 0,
  Options: [
    {
      id: 0,
      title: '',
    },
  ],
};

export const QuestionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionType>) => action.payload,
  },
});

export const { setQuestions } = QuestionSlice.actions;

export default QuestionSlice.reducer;

export const getQuestionsThunk =
  (id: QuestionType['categoryId']): AppThunk =>
  (dispatch) => {
    axios<QuestionType>(`http://localhost:3000/api/questions/${id}`)
      .then(({ data }) => {
        dispatch(setQuestions(data));
      })
      .catch(console.log);
  };

export const getQuestionOptionThunk =
  (id: QuestionType['categoryId']): AppThunk =>
  (dispatch) => {
    axios<QuestionType>(`http://localhost:3000/api/questions/${id}/options`)
      .then(({ data }) => {
        dispatch(setQuestions(data));
      })
      .catch(console.log);
  };
