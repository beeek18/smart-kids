const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

wss.on('connection', (ws, request, wsMap) => {
  const { id } = request.session.user;
  wsMap.set(id, { ws, user: request.session.user });

  ws.on('message', async (data) => {
    const { type, payload } = JSON.parse(data);

    switch (type) {
      case 'JOIN_ROOM': {
        for (const [, wsClient] of wsMap) {
          wsClient.ws.send(JSON.stringify({ type: 'Game/addPlayer', payload }));
        }
        break;
      }

      case 'START_GAME': {
        for (const [, wsClient] of wsMap) {
          wsClient.ws.send(JSON.stringify({ type: 'Game/updateGameStatus', payload }));
        }
        break;
      }

      case 'VOTE': {
        for (const [, wsClient] of wsMap) {
          wsClient.ws.send(JSON.stringify({ type: 'Game/userVote', payload }));
        }
        break;
      }

      case 'CLEAR_VOTE': {
        for (const [, wsClient] of wsMap) {
          wsClient.ws.send(JSON.stringify({ type: 'Game/clearAllVotes', payload }));
        }
        break;
      }

      default:
        break;
    }
  });
});

module.exports = wss;
