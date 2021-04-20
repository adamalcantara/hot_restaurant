const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = []

const resv = []

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'add.html'));

    const chosen = req.params.tables;

    console.log(chosen)



    for (let i = 0; i < tables.length == 5; i++) {
        
    }
});

app.post('/api/add', (req, res)=> {

});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });