import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {

    handleOnClick = () => {
     this.props.onClick()
    };

    render() {
        return (
            <button
                onClick={this.handleOnClick}
                type="button"
                className={css.Button}>Loade more
            </button>

        );
    }
};

export default Button;
