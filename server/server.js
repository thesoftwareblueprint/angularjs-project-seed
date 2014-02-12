/**
 * NODEJS Server Definition
 */
var express = require('express'),
    app = express(),
    http = require('http'),
    https = require('https'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

app.configure(function () {
    // use the system property, or default back to 8080
    app.set('port', process.env.PORT || 9000);

    app.use(express.logger());

    // static
    app.use(express.static(__dirname + '/.tmp/'));

    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    // live reload - for debugging only (remove in production)
    app.use(require('connect-livereload')({
        port: 35729,
        excludeList: ['.woff', '.flv']
    }));
});

// http
server.listen(app.get('port'));

module.exports = app;
