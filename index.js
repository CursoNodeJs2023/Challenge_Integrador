const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/sessions');
require('dotenv').config();

const { notFoundPage } = require('./src/utils/errorHandlers');

const PORT = process.env.PORT || 4000;




app.use(express.static(path.resolve(__dirname, "public_html")));

app.use(express.urlencoded());
app.use(express.json());



app.use(initSession());

app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
  });


app.get('/item'); /*, (req, res) => {
    res.sendFile(__dirname+"/data/items.json");
    const items = JSON.parse(items);
    
    res.send(items)

});
*/
app.get('/item/:id'); /*, (req, res) => {
    const id = req.params.id;
    const items = fs.readFileSync(__dirname+"/data/items.json");
    const result = JSON.parse(items);
    const item = result.filter(item => item.id == id);
    

    res.send(item);
    res.render(item);

})  ;  
*/
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./src/views"));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/', authRoutes);







app.use(methodOverride('_method'));



app.use(notFoundPage);


app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`));