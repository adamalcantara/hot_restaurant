const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];

const resvList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));


app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'add.html'));

    const chosen = req.params.tables;
    console.log(chosen)

    for (let i = 0; i < tables.length == 5; i++) { 
    }

    app.get("/tables", function (req,res) {
        res.sendFile(path.join(__dirname, "tables.html"))
    });
    
    app.get("/api/tables", function (req,res) {
        return res.json(reservation);
    });
    
    app.get("/api/List", function (req,res) {
        return res.json(revList);
    });
    
});

app.post('/api/add', (req, res)=> {

    var newReserv = req.body;
    newReserv.routeName = newReserv.name.replace(/ /g, "").toLowerCase();
    //console.log(newReserv);
    var isItFull = false;
    if(reservation.length <= 5) {
        reservation.push(newReserv);
    } else {
        resvList.push(newReserv);
        isItFull = true;
    }

    res.json(newReserv);
    return isItFull;  
});

app.delete("/api/clear", function(req,res) {
        
    reservation = [];
    resvList = [];
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });