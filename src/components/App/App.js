import { useState } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import s from './App.module.css';
import Modal from 'components/Modal';

function App() {
  const [searchbarInputValue, setSearchbarInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);

  const plusCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const changeSerchbarInputValue = value => setSearchbarInputValue(value);

  const userOpenModal = e => {
    const src = e.target.dataset.modal;
    const alt = e.target.alt;

    setCurrentImage({ src, alt });
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  return (
    <div className={s.App}>
      {currentImage && <Modal image={currentImage} closeModal={closeModal} />}
      <Searchbar onSubmit={changeSerchbarInputValue} />
      <ImageGallery
        text={searchbarInputValue}
        page={currentPage}
        onBtnClick={plusCurrentPage}
        openModal={userOpenModal}
      />
    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     searchbarInputValue: '',
//     currentPage: 1,
//     currentImage: null,
//   };

//   plusCurrentPage = () => {
//     this.setState(prevState => {
//       return { currentPage: prevState.currentPage + 1 };
//     });
//   };

//   changeSerchbarInputValue = value =>
//     this.setState({ searchbarInputValue: value });

//   userOpenModal = e => {
//     const src = e.target.dataset.modal;
//     const alt = e.target.alt;

//     this.setState({ currentImage: { src, alt } });
//   };

//   closeModal = () => {
//     this.setState({ currentImage: null });
//   };

//   render() {
//     const { searchbarInputValue, currentPage, currentImage } = this.state;
//     return (
//       <div className={s.App}>
//         {currentImage && (
//           <Modal image={currentImage} closeModal={this.closeModal} />
//         )}
//         <Searchbar onSubmit={this.changeSerchbarInputValue} />
//         <ImageGallery
//           text={searchbarInputValue}
//           page={currentPage}
//           onBtnClick={this.plusCurrentPage}
//           openModal={this.userOpenModal}
//         />
//       </div>
//     );
//   }
// }

// export default App;
