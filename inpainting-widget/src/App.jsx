import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
//import './styles/App.css'; // Import the main CSS file for the styles

function App() {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [tool, setTool] = useState('brush');

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      setCtx(context);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage(img);
      };
    }
  };

  const startDrawing = (e) => {
    if (ctx) {
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
  };

  const draw = (e) => {
    if (!isDrawing) return;
    if (ctx) {
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.strokeStyle = tool === 'brush' ? brushColor : '#FFFFFF'; // Eraser uses white
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (ctx) {
      setIsDrawing(false);
      ctx.closePath();
    }
  };

  const handleBrushSizeChange = (e) => setBrushSize(e.target.value);
  const handleBrushColorChange = (e) => setBrushColor(e.target.value);
  const exportMaskAsPNG = () => {
    if (canvasRef.current) {
      const imageData = canvasRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'mask.png';
      link.click();
    }
  };

  const toggleTool = () => setTool((prevTool) => (prevTool === 'brush' ? 'eraser' : 'brush'));

  useEffect(() => {
    if (image && ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [image, ctx]);

  return (
    <div className="App">
      {/* Add Header here */}
      <Header />

      {/* Navigation Bar */}
      <nav style={navStyles}>
        <section style={sectionStyles}>
          <h3>Image Upload</h3>
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} />
        </section>

        <section style={sectionStyles}>
          <h3>Brush & Eraser</h3>
          <div>
            <label>Brush Size:</label>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={handleBrushSizeChange}
            />
          </div>
          <div>
            <label>Brush Color:</label>
            <input
              type="color"
              value={brushColor}
              onChange={handleBrushColorChange}
              disabled={tool === 'eraser'} // Disable color picker in eraser mode
            />
          </div>
          <button onClick={toggleTool}>
            Switch to {tool === 'brush' ? 'Eraser' : 'Brush'}
          </button>
        </section>

        <section style={sectionStyles}>
          <h3>Export Options</h3>
          <button onClick={exportMaskAsPNG}>Export Mask as PNG</button>
        </section>
      </nav>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{
          border: '2px solid black',
          marginTop: '20px',
          cursor: tool === 'brush' ? 'crosshair' : 'pointer',
          display: 'block',
        }}
      />

      {/* Add Footer here */}
      <Footer />
    </div>
  );
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '15px',
  backgroundColor: '#f4f4f4',
  borderBottom: '2px solid #ccc',
};

const sectionStyles = {
  flex: 1,
  textAlign: 'center',
};

export default App;
