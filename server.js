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


app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'reserve.html'));

    const chosen = req.params.tables;
    console.log(chosen)

    for (let i = 0; i < tables.length == 5; i++) { 
    }

    app.get("/tables", function (req,res) {
        res.sendFile(path.join(__dirname, "tables.html"))
    });
    
    app.get("/api/tables", function (req,res) {
        return res.json(tables);
    });
    
    app.get("/api/waitlist", function (req,res) {
        return res.json(resv);
    });
    
});

app.post('/api/tables', (req, res)=> {

    var newReserv = req.body;
    console.log(req.body);
    newReserv.routeName = newReserv.customerName.replace(/ /g, "").toLowerCase();
    //console.log(newReserv);
    var isItFull = false;
    if(tables.length < 5) {
        tables.push(newReserv);
    } else {
        resv.push(newReserv);
        isItFull = true;
    }

    res.json(newReserv);
    return isItFull;  
});

app.delete("/api/clear", function(req,res) {
        
    tables = [];
    resv = [];
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });