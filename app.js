const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const mainRoutes = require('./src/router/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');




app.use(express.static('public_html'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/item' , (req, res) => {
    res.sendFile(__dirname+"/data/items.json");
    const items = JSON.parse(items);
    
    res.send(items)

});

app.get('/item/:id' , (req, res) => {
    const id = req.params.id;
    const items = fs.readFileSync(__dirname+"/data/items.json");
    const result = JSON.parse(items);
    const item = result.filter(item => item.id == id);
    

    res.send(item);
    res.render(item);

})  ;  

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.use ((req, res, next ) => {
    res.status(404).send("Recurso no encontrado");
});




app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));