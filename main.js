const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    // console.log(__dirname)
    res.sendFile(path.join(__dirname,'index.html'));
});


app.listen(8080);

