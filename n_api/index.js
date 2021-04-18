const winston = require('winston');
const express = require('express');
const app = express();
winston.add(new winston.transports.File({ filename: 'logfile.log' }));

require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));