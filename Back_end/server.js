const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./Config/db');
const factRoutes = require('./routes/factRoutes');
require('dotenv').config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/facts', factRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
