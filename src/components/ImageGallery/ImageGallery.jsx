import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


class ImageGallery extends Component {

    render() {
        const { arr, name } = this.props;
        return <>
            <ul className={css.ImageGallery}>
                {arr &&
                    arr.map(({ webformatURL, largeImageURL, id }) =>
                            
                        < ImageGalleryItem
                            littleImg={webformatURL}
                            // bigImg={largeImageURL}
                            name={name}
                            key={id}
                        />)
                }
            </ul>            
        </>;
    }
};

export default ImageGallery;
