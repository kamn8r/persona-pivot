const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle persona switching
app.post('/switch-persona', (req, res) => {
  // Logic for persona switching and customization
  // Modify the response based on selected persona
  const persona = req.body.persona;
  let customizedContent = {};

  if (persona === 'republican') {
    customizedContent = {
      ads: ['Republican Ad1', 'Republican Ad2'],
      news: ['Republican News1', 'Republican News2'],
    };
  } else if (persona === 'democrat') {
    customizedContent = {
      ads: ['Democrat Ad1', 'Democrat Ad2'],
      news: ['Democrat News1', 'Democrat News2'],
    };
  }

  res.json(customizedContent);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
