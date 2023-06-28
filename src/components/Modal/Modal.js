import { useEffect } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ closeModal, image: { src, alt } }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModalByPressEscape);
    return () => {
      window.removeEventListener('keydown', closeModalByPressEscape);
    };
  });

  const closeModalByPressEscape = e => {
    if (e.code === 'Escape') closeModal();
  };

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  const renderModalContent = () => {
    return (
      <div className={s.modal}>
        <img src={src} alt={alt} />
      </div>
    );
  };

  return createPortal(
    <div className={s.overlay} onClick={onClickOverlay}>
      {renderModalContent()}
    </div>,
    modalRoot
  );
}

export default Modal;
