import React, { useState } from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleCLick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImage(null)
        }
    }

    return (
        <div className="backdrop" onClick={handleCLick}>
            <img src={selectedImage} alt="enlarged pic" />
        </div>
    )
}

export default Modal;
