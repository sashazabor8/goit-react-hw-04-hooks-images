import { useState } from 'react';
import s from './Searchbar.module.css';
import { CiSearch } from 'react-icons/ci';

function Searchbar({ onSubmit }) {
  const [currentInputValue, setCurrentInputValue] = useState('');

  const onSearchbarFormSubmit = e => {
    e.preventDefault();

    onSubmit(currentInputValue);

    setCurrentInputValue('');
  };

  const onChangeInputValue = e => {
    setCurrentInputValue(e.target.value);
  };

  const { searchbar, searchForm, searchFormBtn, searchFormInput } = s;

  return (
    <header className={searchbar}>
      <form className={searchForm} onSubmit={onSearchbarFormSubmit}>
        <button type="submit" className={searchFormBtn}>
          <CiSearch style={{ width: '30px', height: '30px' }} />
        </button>

        <input
          value={currentInputValue}
          onChange={onChangeInputValue}
          className={searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;

// class Searchbar extends Component {
//   state = {
//     currentInputValue: '',
//   };

//   onSearchbarFormSubmit = e => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     const { currentInputValue } = this.state;
//     onSubmit(currentInputValue);

//     this.setState({ currentInputValue: '' });
//   };

//   onChangeInputValue = e => {
//     this.setState({ currentInputValue: e.target.value });
//   };
//   render() {
//     const { currentInputValue } = this.state;
//     const { searchbar, searchForm, searchFormBtn, searchFormInput } = s;

//     return (
//       <header className={searchbar}>
//         <form className={searchForm} onSubmit={this.onSearchbarFormSubmit}>
//           <button type="submit" className={searchFormBtn}>
//             <CiSearch style={{ width: '30px', height: '30px' }} />
//           </button>

//           <input
//             value={currentInputValue}
//             onChange={this.onChangeInputValue}
//             className={searchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
