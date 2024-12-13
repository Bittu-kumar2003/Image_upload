# Canvas Drawing App

A feature-rich web application that allows users to upload an image, draw on it with a customizable brush, erase, and export the edited image. This app is easy to set up and use, making it perfect for quick edits and annotations.

## Features

- **Image Upload**: Upload images directly from your device.
- **Customizable Brush**: Adjust brush size and color.
- **Eraser Tool**: Switch between brush and eraser seamlessly.
- **Export as PNG**: Save your edited image with a single click.
- **User-Friendly Interface**: Clean design for intuitive usage.
- **Responsive**: Works well on all devices.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [GitHub Repository](#github-repository)
5. [Screenshots](#screenshots)

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Bittu-kumar2003/Image_upload.git
   ```

2. Navigate to the project directory:

   ```bash
   cd canvas-drawing-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Usage

1. **Upload an Image**:

   - Click on the "Upload Image" section in the navigation bar.
   - Select an image file from your device.

2. **Draw on the Canvas**:

   - Use the brush to draw on the uploaded image.
   - Adjust the brush size and color using the sliders and color picker.

3. **Eraser Tool**:

   - Switch to the eraser tool by clicking the toggle button.

4. **Export Your Work**:

   - Click "Export Mask as PNG" to download the edited image.

---

## Project Structure

```plaintext
canvas-drawing-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

---

## GitHub Repository

Visit the [GitHub Repository](https://github.com/Bittu-kumar2003/Image_upload.git) to view the source code and more details.

---

## Screenshots

### Canvas Interface

![Canvas Interface Screenshot](./screenshots/canvas-interface.png)

### Exported Image

![Exported Image Screenshot](./screenshots/exported-image.png)

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

