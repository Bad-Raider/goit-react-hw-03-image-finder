import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchImg from 'helper/Helper';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';





class ImageGallery extends Component {
    
    state = {
        page: 1,
        arrPictures: [],
    }

    async componentDidUpdate(prevProps, prevState) {
        const name = this.props.name;
        const page = this.state.page;
        
        if (prevProps.name !== this.props.name) {
            try {
                this.props.loader(true)
                const { hits } = await fetchImg(name, page);
                this.setState({ arrPictures: [...hits], });
                } catch (error) {
                console.log(error.message);
            }           
        };

        if (prevState.page !== this.state.page) {

            try {
                const { hits } = await fetchImg(name, page);
                this.setState(prevState => ({
                    arrPictures: [...prevState.arrPictures, ...hits],
                }));    
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    hadlerOnClick = () => {
        this.setState(prevState=> ({page: prevState.page + 1}))
    };


    render() {
        // console.log(this.state.page);

        return <>
            <ul className={css.ImageGallery}>
                {this.state.arrPictures &&
                    this.state.arrPictures.map(({ webformatURL, largeImageURL, id }) =>
                        < ImageGalleryItem
                            littleImg={webformatURL}
                            // bigImg={largeImageURL}
                            key={id}
                        />)
                }
            </ul>
            {(this.state.arrPictures.length > 0) &&
                <Button onClick={this.hadlerOnClick} />}
            
        </>;
    }
};

export default ImageGallery;
