const express = require('express');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(cookieParser());

app.use(cors());
app.options('*', cors());

app.use('/api/twitter/user', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find this url on the server`, 400));
});

app.use(globalErrorHandler);
module.exports = app;
