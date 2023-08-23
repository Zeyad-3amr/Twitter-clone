const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

const port = 8000;

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => console.log('DB connection successfull !'));

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
