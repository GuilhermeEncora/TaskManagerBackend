const express = require('express');
const connectDB = require('./database'); // Assuming database.js is in configs folder

connectDB(); // Connect to database

const app = express();
const port = process.env.PORT || 6000;

// Your other middleware and routes here...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});