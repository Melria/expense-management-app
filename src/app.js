const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const expenseRoutes = require('./routes/expenses');
const categoryRoutes = require('./routes/categories');
const incomeRoutes = require('./routes/incomes');
const projectRoutes = require('./routes/projects');
const objectifRoutes = require('./routes/objectifs');
const alerteRoutes = require('./routes/alerte');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/objectifs', objectifRoutes);
app.use('/api/alerts', alerteRoutes);

app.get('/', (req, res) => res.json({ ok: true }));

module.exports = app;
