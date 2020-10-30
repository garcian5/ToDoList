/*Server file*/

// we're going to need to require cors and express
// we don't need body parser in the new version of express
const express = require('express');
const cors = require('cors');
// mongoose will help connect to the mongoDB database
const mongoose = require('mongoose');

// this configures so we can have our environment variables in the .env file
require('dotenv').config();

// this is how we're going to create our express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware
// allows to parse json wc we will be sending and receiving
app.use(cors());
app.use(express.json());

// after the middle ware is set up:
// uri=where our db is stored (we have to get this at mongodb atlas dashboard)
const uri = process.env.ATLAS_URI;
// some flags: useNewURlParser is added because the MongoDB nodejs driver rewrote the tool
// it uses to parse mongoDB connection string
// useCreateIndex: deals with the mongoDB depracating the insurer index function
// put these flags everytime to deal with mongoDB updates
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


// routes
app.get('/', (req, res) => {
    res.send('Hello from MERN');
});

app.use(express.static('client/build'));

// basically importing these files in our server
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

// and use these files in the server
// now, whenever someone goes to our root url and they put /todos in the end,
// it's going to load everything in the todosRouter
// same thing for users
app.use('/todos', todosRouter);
app.use('/users', usersRouter);

// starts the server
// starts listening at a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});