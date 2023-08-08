const express = require('express');
const multer = require('multer');
const axios = require('axios');
const app = express();
const port = 5000;

// Set up image upload using Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for image upload and processing
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Upload the image to the DepthAI API for depth estimation and 3D modeling
    const response = await axios.post('https://api.depthai.com/v1', {
      data: req.file.buffer.toString('base64'),
    });

    // Process the API response to get the 3D model and depth data
    const depthData = response.data.depthData;
    const modelData = response.data.modelData;

    // Calculate dimensions (simplified, you may use more accurate methods)
    const dimensions = {
      width: 10, // Example width in cm
      height: 15, // Example height in cm
      depth: 5, // Example depth in cm
    };

    // Send back the processed data to the frontend
    res.json({ depthData, modelData, dimensions });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Error processing image' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
