require('module-alias/register')
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const ejsLayouts=require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "/public")))
app.use(ejsLayouts);
app.set("layout extractScripts", true);

app.use('/', routes);



const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})