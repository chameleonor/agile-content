const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.set('appPath', 'public');
app.use(express.static(__dirname + '/public'));

app.route('/*')
    .get(function (req, res) {
        res.sendfile(app.get('appPath') + '/index.html');
    });

app.listen(port);