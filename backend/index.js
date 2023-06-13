const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.static('dist/movie-manager'));

app.get('/', (req, res) => {
    res.status(200);
});

app.get('/movies/:id', (req, res) => {
    res.render('article' + req.params);
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server running at port ${PORT}`);
    } else {
        console.log(error);
    }
});