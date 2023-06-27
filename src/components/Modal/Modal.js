import { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByPressEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByPressEscape);
  }

  closeModalByPressEscape = e => {
    const { closeModal } = this.props;
    if (e.code === 'Escape') closeModal();
  };

  onClickOverlay = e => {
    const { closeModal } = this.props;
    if (e.target === e.currentTarget) closeModal();
  };

  renderModalContent() {
    const { src, alt } = this.props.image;
    return (
      <div className={s.modal}>
        <img src={src} alt={alt} />
      </div>
    );
  }
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.onClickOverlay}>
        {this.renderModalContent()}
      </div>,
      modalRoot
    );
  }
}

export default Modal;
