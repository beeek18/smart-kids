import { SET_WS, SOCKET_INIT } from '../../types/ws/WsType';

export const setWs = (payload) => ({ type: SET_WS, payload });
export const socketInit = (payload) => ({ type: SOCKET_INIT, payload });
