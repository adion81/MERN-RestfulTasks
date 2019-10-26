require('dotenv').config();

const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors);
app.use(express.json());

require('./server/config/database');
require('./server/config/routes')(app);