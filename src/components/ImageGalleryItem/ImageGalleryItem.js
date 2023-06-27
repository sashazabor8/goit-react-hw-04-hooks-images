import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, tags, onClick } = this.props;

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
}

export default ImageGalleryItem;
