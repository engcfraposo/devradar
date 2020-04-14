const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();



 
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.set('useCreateIndex', true);


app.use(express.json());
app.use(routes);


app.listen(3333);
