require('dotenv').config();


const cors = require('cors'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require('./server/config/database');
require('./server/config/routes.js')(app)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})