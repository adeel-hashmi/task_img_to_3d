import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [dimensions, setDimensions] = useState([]);

  const handleImageUpload = (event) => {
    const imageFiles = event.target.files;
    const imageArray = Array.from(imageFiles);

    setSelectedImages(imageArray);

    // Call the backend API to process images and get dimensions
    // Replace the API call with your actual implementation
    // For now, we'll set dummy dimensions
    const dummyDimensions = Array(imageArray.length).fill({
      width: '10 cm',
      height: '15 cm',
      depth: '5 cm',
    });
    setDimensions(dummyDimensions);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>3D Image Dimension Calculator</h1>
        </header>
        <div className="content">
          <section className="image-section">
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
            <div className="selected-images">
              {selectedImages.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className="selected-image" />
              ))}
            </div>
          </section>
          <section className="model-section">
          
            {/* Add your Three.js 3D model preview here */}
            {/* Replace with your Three.js implementation */}
            <div className="dummy-3d-model">Dummy 3D Model</div>
          </section>
          <section className="dimensions-section">
            <h2>Object Dimensions</h2>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Width</th>
                  <th>Height</th>
                  <th>Depth</th>
                </tr>
              </thead>
              <tbody>
                {dimensions.map((dim, index) => (
                  <tr key={index}>
                    <td>Image {index + 1}</td>
                    <td>{dim.width}</td>
                    <td>{dim.height}</td>
                    <td>{dim.depth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
