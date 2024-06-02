import React from 'react';

const WhatsAppIcon = () => {
  const bookBtn = () => {
    // Use your WhatsApp number and message
    const phoneNumber = '8105803440'; // Replace with your WhatsApp number
    const message = 'Hello, I am interested in booking a Car.';

    // Create the WhatsApp API link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the link in a new tab/window
    window.open(whatsappLink, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '150px',
      right: '100px',
      cursor: 'pointer',
    
    }} onClick={bookBtn}>
      {/* Replace 'whatsapp-icon.png' with the path to your WhatsApp icon image */}
      <img src="/whatsup.png"  alt="WhatsApp" style={{ width: '60px', height: '60px', zIndex:'999', position:'fixed'}} />

    </div>
  );
};

export default WhatsAppIcon;
