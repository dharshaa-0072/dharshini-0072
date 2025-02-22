const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./backend/projects');
const aiRoutes = require('./routes/ai');
const dbConfig = require('./config/db');

const app = express();
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


