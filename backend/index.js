require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({
  origin:process.env.CORS_ORIGIN || "*"
}));

app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
