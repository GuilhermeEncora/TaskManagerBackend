const express = require('express');
const userRoutes = require('./user-routes'); // Adjust path if needed

const app = express();

// ... other middleware ...

// Mount user routes at '/users' path
app.use('/users', userRoutes);

// ... other routes ...

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
