const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     res.status(200).json({message: 'handling requests via or Browser either Postman'});
//     next();
// });

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);


module.exports = app;
