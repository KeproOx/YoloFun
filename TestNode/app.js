var http = require('http');
var url = require("url");
var querystring = require("querystring");


var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;
    res.writeHead(200, { "Content-type": "text/plain" });
    if (page == '/') {
        res.write("Vous êtes $ l'accueil du site");
        if ('prenom' in params && 'nom' in params) {
            res.write('\nBienvenue ' + params['nom'] + ' ' + params['prenom']);
        }
        else {
            res.write('\nBienvenue jeune inconnu !');
        }
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write("<h1>404 not found</h1>");
    }
    res.end();
});

server.listen(8080);
