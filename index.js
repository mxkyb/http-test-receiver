const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text({type: '*/*'}));

app.post('/beacon', (req, res) => {
    console.log('Received post:', req.body);

    res.sendStatus(200);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
