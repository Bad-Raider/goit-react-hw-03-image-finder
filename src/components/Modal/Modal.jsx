import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", e => {
            if (e.code === "Escape") {
                // this.props.onChangeStatusModal();
                console.log('pfrhbdfq')
            }
        });    
    };

    handleOnClick = (e) => {
        // const
        this.props.onChangeStatusModal();  
    };

    render() {
        return createPortal (
            <div onClick={this.handleOnClick}
                className={css.Overlay}>
                <div className={css.Modal}>
                    <img src={this.props.largeImg} alt={this.props.name} />
                </div>
            </div>, modalRoot);
    }
};

export default Modal;
