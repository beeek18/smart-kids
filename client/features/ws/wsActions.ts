import { SET_WS, SOCKET_INIT } from '../../types/ws/WsType';

export const setWs = (payload: any) => ({ type: SET_WS, payload });
export const socketInit = () => ({ type: SOCKET_INIT });
