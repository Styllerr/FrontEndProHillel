const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname + '/pub')));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(__dirname + '/pub/index.html')
});

app.listen(3000, () => console.log('Server running...'));
