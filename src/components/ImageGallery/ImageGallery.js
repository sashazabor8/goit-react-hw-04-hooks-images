import { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import api from 'api/pixabayFetch';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader';

const statusOptions = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

function ImageGallery({ text, page, onBtnClick, openModal }) {
  const [status, setStatus] = useState(statusOptions.IDLE);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (text === '') return;
    setStatus(statusOptions.PENDING);
    setTimeout(() => {
      api
        .fetchPixabay(text, page)
        .then(res => {
          console.log(res);
          if (res.total === 0) {
            setStatus(statusOptions.REJECTED);

            return Promise.reject(new Error(`No image named ${text}`));
          }
          page > 1
            ? setResponse(prevRes => [...prevRes, ...res.hits])
            : setResponse(res.hits);
          setStatus(statusOptions.RESOLVED);
        })
        .catch(error => {
          setError(error);
        });
    }, 1000);
  }, [page, text]);

  if (status === 'idle') return;
  if (page === 1) {
    if (status === 'pending') return <Loader page={page} />;
  }
  if (status === 'resolved' || (status === 'pending' && page > 1)) {
    return (
      <>
        <ul className={s.imageGallery}>
          {response.map(({ id, webformatURL, tags, largeImageURL }, index) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                onClick={openModal}
              />
            );
          })}
        </ul>
        {status === 'pending' ? (
          <Loader page={page} />
        ) : (
          <Button onClick={onBtnClick} />
        )}
      </>
    );
  }
  if (status === 'rejected')
    return (
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {error.message}
      </h1>
    );
}

export default ImageGallery;

// class ImageGallery extends Component {
//   state = {
//     status: 'idle',
//     response: null,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { text, page } = this.props;

//     if (prevProps !== this.props) {
//       if (prevProps.text === text && prevProps.page === page) return;
//       this.setState({ status: 'pending' });

//       setTimeout(() => {
//         api
//           .fetchPixabay(text, page)
//           .then(res => {
//             console.log(res);
//             if (res.total === 0) {
//               this.setState({ status: 'rejected' });

//               return Promise.reject(new Error(`No image named ${text}`));
//             }
//             if (page === 1)
//               this.setState({ status: 'resolved', response: res.hits });

//             if (prevProps.page !== page) {
//               this.setState({
//                 response: [...prevState.response, ...res.hits],
//                 status: 'resolved',
//               });
//             }
//           })
//           .catch(error => {
//             this.setState({ error });
//           });
//       }, 1000);
//     }
//   }
//   render() {
//     const { status, response, error } = this.state;
//     const { onBtnClick, page, openModal } = this.props;

//     if (status === 'pending') {
//       if (page === 1) return <Loader page={page} />;
//       if (page > 1)
//         return (
//           <>
//             <ul className={s.imageGallery}>
//               {response.map(
//                 ({ id, webformatURL, tags, largeImageURL }, index) => {
//                   return (
//                     <ImageGalleryItem
//                       key={id}
//                       webformatURL={webformatURL}
//                       tags={tags}
//                       largeImageURL={largeImageURL}
//                       onClick={openModal}
//                     />
//                   );
//                 }
//               )}
//             </ul>
//             <Loader page={page} />
//           </>
//         );
//     }

//     if (status === 'resolved')
//       return (
//         <>
//           <ul className={s.imageGallery}>
//             {response.map(({ id, webformatURL, largeImageURL, tags }) => {
//               return (
//                 <ImageGalleryItem
//                   key={id}
//                   webformatURL={webformatURL}
//                   largeImageURL={largeImageURL}
//                   tags={tags}
//                   onClick={openModal}
//                 />
//               );
//             })}
//           </ul>
//           <Button onClick={onBtnClick} />
//         </>
//       );

//     if (status === 'rejected')
//       return (
//         <h1
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           {error.message}
//         </h1>
//       );
//   }
// }

// export default ImageGallery;
