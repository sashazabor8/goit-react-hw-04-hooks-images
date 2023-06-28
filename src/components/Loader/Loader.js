import React from 'react';
import s from './Loader.module.css';
import { Dna } from 'react-loader-spinner';

function Loader({ page }) {
  return (
    <div className={page === 1 ? s.loaderPreview : s.loader}>
      <Dna
        visible={true}
        height="130"
        width="130"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader;
