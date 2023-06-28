import React from 'react';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onClick }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-modal={largeImageURL}
        className={s.imageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
}

export default ImageGalleryItem;
