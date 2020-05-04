const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
    res.end = 'Hello';
}).listen(3000, () => {
    console.log('Srver has starting...')
})