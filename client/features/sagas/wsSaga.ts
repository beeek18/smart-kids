import { END, eventChannel } from 'redux-saga';
import { Platform } from 'react-native';
import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { API_URL } from '@env';
import { SET_WS, SOCKET_INIT } from '../../types/ws/WsType';

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    socket.onopen = () => {
      emit({ type: SET_WS, payload: true });
    };

    socket.onerror = function (error) {
      emit({ type: SET_WS, payload: null });
    };

    socket.onmessage = function (event) {
      emit(JSON.parse(event.data));
    };

    socket.onclose = function (event) {
      emit({ type: SET_WS, payload: null });
    };

    return () => {
      console.log('Socket off');
      emit(END);
    };
  });
}

function createWebSocketConnection() {
  const newSocket = new WebSocket(
    `ws://${Platform.OS === 'android' || Platform.OS === 'ios' ? API_URL : 'localhost'}:3000`,
  );
  return newSocket;
}

function* startGameWorker(socket) {
  while (true) {
    const message = yield take('START_GAME');
    socket.send(JSON.stringify(message));
  }
}

function* joinGameWorker(socket) {
  while (true) {
    console.log('saagaworks');
    const message = yield take('JOIN_ROOM');
    socket.send(JSON.stringify(message));
  }
}

function* voteWorker(socket) {
  while (true) {
    const message = yield take('VOTE');
    socket.send(JSON.stringify(message));
  }
}

function* wsWorker(action) {
  console.log('11111111111111', action);
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  yield fork(joinGameWorker, socket);
  yield fork(startGameWorker, socket);
  yield fork(voteWorker, socket);

  while (true) {
    try {
      const backAction = yield take(socketChannel);
      yield put(backAction);
    } catch (e) {
      console.log('socket error', e);
    }
  }
}

export default function* wsWatcher() {
  yield takeEvery(SOCKET_INIT, wsWorker);
}
