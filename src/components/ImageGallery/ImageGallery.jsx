import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
    
    state = {
        nameImg: '',
    }

        componentDidUpdate() {
            const prevState = this.state.nameImg;
            const newState = this.props.name;
            if (prevState !== newState) {
                console.log('prevState', prevState)
                console.log('newState', newState)
            }
    };

    MY_KEY = 'u_7h5ye579eo';
    BASE_URL = 'https://pixabay.com/api/?q=cat&page=1&key=u_7h5ye579eo&image_type=photo&orientation=horizontal&per_page=12';

    render() {
        return (
            <ul className={css.ImageGallery}>
                    <ImageGalleryItem/>
            </ul>   
        )
    }
};

export default ImageGallery;
