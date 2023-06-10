const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const friendsRouter = require('./routes/friendsRouter');

require('dotenv').config();
const wss = require('../ws/index');

const app = express();
const PORT = process.env.SERVER_PORT ?? 3000;

const sessionConfig = session({
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
});

app.use(sessionConfig);
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
  console.log('Parsing session from request...');
  sessionConfig(request, {}, () => {
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }
    console.log('Session is parsed!');
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request, map);
    });
  });
});

server.listen(PORT, () => console.log(`START ON PORT ${PORT}`));
