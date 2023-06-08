import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas/rootSaga';
import userReducer from './slices/user/userSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type ThunkActionCreater<ThunkArgument = void> = (arg: ThunkArgument) => AppThunk;

// sagaMiddleware.run(rootSaga);

export default store;
