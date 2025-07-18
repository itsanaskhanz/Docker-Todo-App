const express = require('express');
const app = express();

let PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
