const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Devops App using Docker and Jenkins!');
});

app.listen(3000, () => console.log('App is running at 3000'));