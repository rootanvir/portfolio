const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from "public"
app.use(express.static('public'));

// Endpoint to list all PDF certificates
app.get('/certificates-list', (req, res) => {
  const folderPath = path.join(__dirname, 'public/certificates');
  fs.readdir(folderPath, (err, files) => {
    if (err) return res.status(500).send('Error reading folder');
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    res.json(pdfFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
