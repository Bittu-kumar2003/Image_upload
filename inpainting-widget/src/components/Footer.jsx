import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>&copy; 2024 Canvas Drawing App. All Rights Reserved.</p>
    </footer>
  );
};

const footerStyles = {
  textAlign: 'center',
  padding: '2px',
  backgroundColor: '#f4f4f4',
  borderTop: '2px solid #ccc',
  position: 'fixed',
  width: '95%',
  bottom: '0',
  
};

export default Footer;
