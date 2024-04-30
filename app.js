if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');

const app = express();

app.get('/test', (req, res) => res.send('Test 10xers'));

module.exports = app;
