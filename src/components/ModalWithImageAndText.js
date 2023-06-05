import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalWithImageAndText = ({ imageUrl, altText, buttonText, modalTitle, paragraphText, listItems }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img
          src={imageUrl}
          alt={altText}
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
          }}
        >
          {buttonText}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{paragraphText}</p>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CERRAR
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalWithImageAndText;
