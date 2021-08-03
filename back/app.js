const express = require('express');
const app = express();
const mongoose = require("mongoose")

// MIDDLEWARES
app.use(express.json())

// DATABASE 
mongoose
    .connect("mongodb://localhost:27017/gif", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DataBase Connected !!')).catch(err => console.log('database not connected', err))



// ROUTES
const authRoutes = require('./routes/auth.route')
const userRoutes = require('./routes/user.route')
const gifRoutes = require('./routes/gif.route');
const categoryRoutes = require('./routes/category.route');
const tagRoutes = require('./routes/tag.route');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/gifs', gifRoutes);
app.use('/tags', tagRoutes);
app.use('/categories', categoryRoutes);


const port = 5000
app.listen(port, () => {
    console.log(`Server started on port ${'http://localhost:' + port} `);
});