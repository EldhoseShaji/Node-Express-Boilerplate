var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));

app.get('/',function(req, res){
    res.send('Hello World!');
})

app.listen(3000, function(){
    debug(`Listening on port ${chalk.green('3000')}`);
});
