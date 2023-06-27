import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
