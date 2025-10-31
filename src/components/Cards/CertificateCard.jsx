import React, { useState } from "react";
import "./CertificateCard.css";
import certificateCardImage from "../../assets/projectImg.svg";

function CertificateCards({ image = certificateCardImage, name = "Project Name" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="certificate-card" onClick={() => setIsOpen(true)}>
        <img src={image} alt="certificate preview" className="image" />
        <h2>{name}</h2>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={image} alt={name} className="popup-image" />
            <h2 className="popup-title">{name}</h2>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificateCards;
