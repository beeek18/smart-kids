const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const friendsRouter = require('./routes/friendsRouter');

require('dotenv').config();
const wss = require('../ws/index');

const app = express();
const PORT = process.env.SERVER_PORT ?? 3000;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/friends', friendsRouter);

const server = http.createServer(app);
const map = new Map();

server.on('upgrade', (request, socket, head) => {
  console.log('Parsing JWT from request cookies...');
  console.log('socket', socket);
  // const tokenJWT = request.cookies?.tokenJWT;
  // console.log(request.cookies);
  // if (!tokenJWT) {
  //   socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
  //   socket.destroy();
  //   return;
  // }

  // const decodedToken = jwt.verify(tokenJWT, process.env.JWT_SECRET);

  console.log('JWT is valid!');

  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request, map);
  });
});

server.listen(PORT, () => console.log(`START ON PORT ${PORT}`));
