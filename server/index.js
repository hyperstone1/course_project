require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public')); // удалить позже
app.use(express.json({ limit: '50mb' })); // удалить позже

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
  } catch (error) {
    console.log('Error with connect to database: ', error);
  }
};
start();
