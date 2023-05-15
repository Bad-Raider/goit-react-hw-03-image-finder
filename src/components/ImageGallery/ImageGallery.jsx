import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {

    render() {
        return (
            <ul class={css.ImageGallery}>
                    <ImageGalleryItem/>
            </ul>   
        )
    }
};

export default ImageGallery;
