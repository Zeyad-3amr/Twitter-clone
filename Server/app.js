const express = require('express');
const userRouter = require('./routes/userRoutes');
const tweetRouter = require('./routes/tweetRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.options('*', cors());

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.use(cookieParser());

app.use('/api/twitter/user', userRouter);
app.use('/api/twitter/tweet', tweetRouter);
app.use(express.static(`${__dirname}/build`));
app.all('*', (req, res, next) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find this url on the server`, 400));
// });

app.use(globalErrorHandler);
module.exports = app;
