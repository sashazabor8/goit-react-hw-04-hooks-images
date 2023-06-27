import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import s from './App.module.css';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    searchbarInputValue: '',
    currentPage: 1,
    currentImage: null,
  };

  plusCurrentPage = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  changeSerchbarInputValue = value =>
    this.setState({ searchbarInputValue: value });

  userOpenModal = e => {
    const src = e.target.dataset.modal;
    const alt = e.target.alt;

    this.setState({ currentImage: { src, alt } });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { searchbarInputValue, currentPage, currentImage } = this.state;
    return (
      <div className={s.App}>
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
        <Searchbar onSubmit={this.changeSerchbarInputValue} />
        <ImageGallery
          text={searchbarInputValue}
          page={currentPage}
          onBtnClick={this.plusCurrentPage}
          openModal={this.userOpenModal}
        />
      </div>
    );
  }
}

export default App;
