const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config(); 


connectDB();

const app = express();


app.use(bodyParser.json());
app.use(helmet());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});
app.use('/auth/login', limiter);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Task Management API!');
});
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/admin', adminRoutes);

// Server
// const PORT = process.env.PORT || 8090; 
app.listen(8090, () => console.log(`Server running on port 8090`));