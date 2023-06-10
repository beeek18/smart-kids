import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './slices/user/userSlice';
import gameReducer from './slices/game/gameSlice';
import rootSaga from '../sagas/rootSaga';
import questionsReduser from './slices/question/questionSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    questions: questionsReduser,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type ThunkActionCreater<ThunkArgument = void> = (arg: ThunkArgument) => AppThunk;

sagaMiddleware.run(rootSaga);

export default store;
