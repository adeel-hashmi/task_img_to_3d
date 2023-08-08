import React, { useState } from 'react';
import './App.css';
import Model from './components/Model';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 'N/A', height: 'N/A', depth: 'N/A' });

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));

    // You can call the backend API to process the image and get dimensions here
    // Replace the API call with your actual implementation
    // For now, we'll set dummy dimensions
    setDimensions({ width: '10 cm', height: '15 cm', depth: '5 cm' });
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>3D Image Dimension Calculator</h1>
        </header>
        <div className="content">
          <section className="image-section">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && <img src={selectedImage} alt="Uploaded" className="selected-image" />}
          </section>
          <section className="model-section">
          <Model url="https://threejs.org/examples/models/car.gltf" />

            {/* Add your Three.js 3D model preview here */}
            {/* Replace with your Three.js implementation */}
            <div className="dummy-3d-model">Dummy 3D Model</div>
          </section>
          <section className="dimensions-section">
            <h2>Object Dimensions</h2>
            <table>
              <tbody>
                <tr>
                  <td>Width:</td>
                  <td>{dimensions.width}</td>
                </tr>
                <tr>
                  <td>Height:</td>
                  <td>{dimensions.height}</td>
                </tr>
                <tr>
                  <td>Depth:</td>
                  <td>{dimensions.depth}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
