import { Component } from "react";
import css from './App.module.css';
import fetchImg from '../helper/Helper';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader"; 


class App extends Component {

  state = {
    name: '',
    page: 1,
    perPage: 12,
    totalPage: null,
    arrPictures: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const {name, page, perPage} = this.state;
        
    if (prevState.name !== name ) {
      try {
        this.setState({ isLoading: true });
        const { totalHits, hits, } = await fetchImg(name, page, perPage);
        const totalPage = Math.round(totalHits / perPage);

        const newArr = hits.map(({ id, largeImageURL, webformatURL, }) => {
          return { id, largeImageURL, webformatURL }
        });

        this.setState({
          arrPictures: newArr,
          totalPage: totalPage,
        });

        if (hits.length === 0) {
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      }
      catch (error) {
        this.setState({
          error: error.message,
        });
      }
      finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevState.page !== page) {

      try {
        this.setState({ isLoading: true });
        const { hits } = await fetchImg(name, page, perPage);

        const newArr = hits.map(({ id, largeImageURL, webformatURL, }) => {
          return { id, largeImageURL, webformatURL }
        });

          this.setState(prevState => ({
            arrPictures: [...prevState.arrPictures, ...newArr],
        }));    
      }
      catch (error) {
        this.setState({
          error: error.message,
        });
      }
      finally {
        this.setState({ isLoading: false });
      }
    }
  };


  onSubmit = (nameForm) => {
    this.setState({
      name: nameForm.toLowerCase().trim(),
      page: 1,
      arrPictures: []
    })
  };


  hadlerOnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };


  render() {
    const {name, arrPictures, isLoading, totalPage, page } = this.state;

    return (
      <div className={css.App} >
        <Searchbar onSubmit={this.onSubmit} />
        
        <ImageGallery
          arr={arrPictures}
          name={name}
        />

        {isLoading &&
          <Loader />
        }

        {(arrPictures.length > 0 && page !== totalPage) &&
          <Button
          onClick={this.hadlerOnClick}
          totalPage={totalPage}
          page={page}
          />}
      </div>
    )
  }
}

export default App;