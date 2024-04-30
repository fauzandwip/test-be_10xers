if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// all router
app.use(require('./routes'));

app.get('/test', (req, res) => res.send('Test 10xers'));

// error handler middleware
app.use(errorHandler);

module.exports = app;
