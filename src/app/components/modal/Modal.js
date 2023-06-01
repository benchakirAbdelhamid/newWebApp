import React from 'react';
import './modal.css';
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26381.766432542834!2d-6.6060288!3d34.2556672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1685578677370!5m2!1sen!2sma"
                style={{ border: "0", width: "100%", height: "80vh" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
