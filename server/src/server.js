const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRouter');
const friendsRouter = require('./routes/friendsRouter');
const questionsRouter = require('./routes/questionsRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT ?? 3000;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/friends', friendsRouter);
app.use('/questions', questionsRouter);

app.listen(PORT, () => console.log(`START ON PORT ${PORT}`));
