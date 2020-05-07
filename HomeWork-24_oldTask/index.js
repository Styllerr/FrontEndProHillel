const request = require('request-promise');
const path = require('path');
const cors = require('cors');

let express = require('express');

let app = express();
app.use(cors());
const options = {
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/users'
}

app.use(express.static(path.join(__dirname + '/pub')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pub/index.html')
});
app.get('/users', (req, res) => {
    request(options)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            console.log(err)
        })
});

app.listen(3000, () => console.log('Server running...'));
