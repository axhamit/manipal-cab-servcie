// components/Popup.tsx
import React from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div>
      {/* Your popup content here */}
      <button onClick={onClose}>Close Popup</button>
    </div>
  );
};

export default Popup;
