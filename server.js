const express = require('express');
const cors = require('cors');
const app = express();
const propertyRoutes = require('./routes/propertyRoutes');
// const contactForm = require ('./routes/contactForm')
// const projectRoutes = require ('./routes/projectRoutes')

// Configure CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Use the property routes
app.use('/', propertyRoutes); 
// app.use('/project', projectRoutes);
// app.use('/api/conatct',contactForm )

// Define the port
const PORT = process.env.PORT || 8080;
 
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
