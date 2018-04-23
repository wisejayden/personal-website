const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/index2.html');
});
app.get('*', function(req, res) {
    res.redirect('/');
});

app.listen(process.env.PORT || 8080, function() {
    console.log("I'm Listening on port 8080.");
});