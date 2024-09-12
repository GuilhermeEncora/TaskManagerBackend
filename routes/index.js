const express = require('express');
const userRoutes = require('./user-routes'); // Adjust path if needed

const app = express();

// ... other middleware ...

// Mount user routes at '/users' path
app.use('/', userRoutes);

// ... other routes ...

module.exports = routes;

// ... other code 
