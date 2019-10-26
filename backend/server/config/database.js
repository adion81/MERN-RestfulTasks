require('dotenv').config();
const mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('You are now inside the mainframe...');
})

var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})