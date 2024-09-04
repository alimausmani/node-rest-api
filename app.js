const express = require('express');
const app = express();
const cors = require('cors');

// Apply CORS middleware
app.use(cors());

const PORT = process.env.PORT || 5000;
const products_routes = require('./routes/products');
const Connect = require('./db/connect');

app.get('/', (req, res) => {
    res.send("Hi, I am Live");
});

// Middleware or to set router
app.use('/api/products', products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            Connect();
            console.log(`${PORT} Connected to the server`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
