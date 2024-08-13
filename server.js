const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const propertyRoutes = require('./routes/propertyRoutes');

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions)); // Enable CORS with configuration
app.use(express.json());
app.use('/properties', propertyRoutes);
app.use('/uploads', express.static('uploads')); // Serve images statically

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
