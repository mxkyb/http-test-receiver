const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const options = {
    key: fs.readFileSync('./private-key.pem'),
    cert: fs.readFileSync('./certificate.pem')
};

app.use(bodyParser.text({type: '*/*'}));

app.post('/beacon', (req, res) => {
    console.log('Received post:', req.body);

    res.sendStatus(200);
});

const port = 3000;

https.createServer(options, app).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
