const express = require('express');
const cors = require('cors');
const app = express();
const propertyRoutes = require('./routes/propertyRoutes');
const adminRoutes = require('./routes/admin'); 
const listYourPropertyRoute = require('./routes/listyourproperty');
const customerPropertyRoutes = require('./routes/customerProperty');
const cfreProjectsRoutes = require('./routes/cfreProjects');
// const contactForm = require('./routes/contactForm');
// const projectRoutes = require('./routes/projectRoutes');
const coworkingRoutes = require('./routes/coworkingRoutes');
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
app.use('/cfreprojects', cfreProjectsRoutes);
// Admin registration and login routes
app.use('/admin', adminRoutes);

// Uncomment these when you have routes for contact and project
// app.use('/project', projectRoutes);
// app.use('/api/contact', contactForm);

// Include the new route 
app.use('/api/listyourproperty', listYourPropertyRoute);

app.use('/api', customerPropertyRoutes); 
app.use('/coworking', coworkingRoutes);
//running on production
//New Port
// Listen on 8088 for production, or use 8001 | 8088 for local development
//8089
const PORT = process.env.PORT || 8001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

