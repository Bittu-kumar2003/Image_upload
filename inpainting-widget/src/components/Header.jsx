import React from 'react';

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={headerContentStyles}>
        <div>
          <h1>Canvas Drawing App</h1>
          <p>Upload an image, draw with a brush, and export your work.</p>
        </div>
        <a
          href="https://github.com/Bittu-kumar2003/Image_upload/tree/main/inpainting-widget" 
          target="_blank"
          rel="noopener noreferrer"
          style={logoLinkStyles}
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            style={logoStyles}
          />
        </a>
      </div>
    </header>
  );
};

const headerStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  marginBottom: '20px',
  position: 'relative',
};

const headerContentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const logoLinkStyles = {
  textDecoration: 'none',
};

const logoStyles = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

export default Header;
