import { all } from 'redux-saga/effects';
import wsWatcher from './wsSaga';

export default function* rootSaga(): Generator {
  yield all([wsWatcher()]);
}
