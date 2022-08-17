require('dotenv').config();
require('express-async-errors');  // this will allow to throw error without writing try catch in our function 
const express = require('express');
const userApiRouter = require('./routes/users.routes');
const productsApiRouter = require('./routes/products.routes');
const contactsApiRouter = require('./routes/contacts.routes');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const { connectDB } = require('./db/connect');
const app = express();

// standard middleware
app.use(express.json()); // to get json data from req.body
app.use(express.urlencoded());

//setting routes middleware
app.use('/api/auth', userApiRouter);
app.use('/api/products', productsApiRouter);
app.use('/api/contacts', contactsApiRouter);

// error handling middlewares
app.use(notFound); // custom 404 page( middleware);
app.use(errorHandlerMiddleware); // custom error handler for handing all the errors

const port = process.env.PORT || 3000;
const MONGO_URI= 'mongodb+srv://admin:eme249@cluster0.q1xvlei.mongodb.net/XENONSTACK-DB?retryWrites=true&w=majority'
console.log(MONGO_URI)

const start = async () => {
    try {
        await connectDB(MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();