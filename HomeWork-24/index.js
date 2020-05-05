/* const http = require('http');
const path = require('path');
const fs = require('fs');
 */
/* const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(path.join(__dirname, 'pub', 'index.html'), (err, data) => {
        if (err) {
            throw new Error(err);
        }
        let page = data.toString();
        res.end(page);
    })
})
server.listen(3000, () => {
    console.log('Server has starting...');
}) */

let express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Hello Express!!!'));
app.get('/stud', (req, res) => res.send('Нет студентов'));

app.listen(3000, () => console.log('Server running...'));
