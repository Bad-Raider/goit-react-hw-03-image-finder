import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

    render() {
        return (
            <div class={css.Overlay}>
                <div class={css.Modal}>
                    <img src="" alt="" />
                </div>
            </div>

        );
    }
};

export default Modal;
