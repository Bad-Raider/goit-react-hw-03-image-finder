import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {

    render() {
        return (
            <button type="button" class={css.Button}>Loade more
            </button>

        );
    }
};

export default Button;
