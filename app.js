const express = require('express');
const http = require('http');
const cors = require('cors')
const db = require('./util/database');
const app = express();
const User = require('./models/user')
const mainRoutes = require('./routes/mainroutes');


User.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mainRoutes);


app.listen(3000, () => {
    console.log('server is running at port 3000');
});



