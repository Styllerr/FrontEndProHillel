let express = require('express');

let app = express();
app.use(express.static(__dirname + '/pub'));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(__dirname + '/pub/index.html')
});

app.listen(3000, () => console.log('Server running...'));
