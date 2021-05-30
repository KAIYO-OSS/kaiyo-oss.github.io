var express = require('express');
var path = require('path');

var server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

server.get('/casestudy/marketing', (req, res) => {
    res.sendFile('marketing.html', { root: __dirname });
});

server.get('/about', (req, res) => {
    res.sendFile('about.html', { root: __dirname });
});

server.get('/careers', (req, res) => {
    res.sendFile('careers.html', { root: __dirname });
});

server.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: __dirname });
});

server.get('/legal/privacy-policy', (req, res) => {
    res.sendFile('privacy.html', { root: __dirname });
});

server.get('/legal/terms-of-use', (req, res) => {
    res.sendFile('terms.html', { root: __dirname });
});

server.get('/health', (req, res) => {
    res.send("ALL OK")
})

server.listen(5000);
