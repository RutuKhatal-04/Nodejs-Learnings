const express = require('express');
const authRouter = require('./routes/authRouter');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

app.use('/api/v1/users', authRouter);

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});