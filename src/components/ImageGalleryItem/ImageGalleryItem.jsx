import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {

    render() {
        return (
            <li className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItemImg} src={this.props.littleImg} alt="" />
            </li>
        )
    }
};

export default ImageGalleryItem;