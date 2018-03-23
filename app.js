var express = require('express');
var five = require('johnny-five');
var board = new five.Board();
var app = express();
app.set('view engine', 'ejs');

board.on("ready", function() {
    var led = new five.Led(13);

    this.repl.inject({
        led: led
    });

    app.get('/on', function(req, res){
        res.render('status/on');
        led.on();
    });
    app.get('/off', function(req, res){
        res.render('status/off');
        led.off();
    });
});

app.listen(3000, function(req, res){
    console.log('Server on');
});
