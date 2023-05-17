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
    arrPictures: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const {name, page} = this.state;
        
    if (prevState.name !== name) {
      try {
        this.setState({ isLoading: true });
        const { hits } = await fetchImg(name, page);
        this.setState({ arrPictures: hits, });
      }
      catch (error) {
        console.log(error.message);
      }
      finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevState.page !== page) {

      try {
        this.setState({ isLoading: true });
        const { hits } = await fetchImg(name, page);
          this.setState(prevState => ({
            arrPictures: [...prevState.arrPictures, ...hits],
        }));    
      }
      catch (error) {
        console.log(error.message);
      }
      finally {
        this.setState({ isLoading: false });
      }
    }
  };


  onSubmit = (nameForm) => {
    this.setState({name: nameForm.toLowerCase().trim()})
  };


  hadlerOnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };


  render() {
    const {name, arrPictures, isLoading } = this.state;

    return (
      <div className={css.App} >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          arr={arrPictures}
          name={name}
        />
        {isLoading && <Loader />}

        {(arrPictures.length > 0) &&
          <Button onClick={this.hadlerOnClick} />}
          
      </div>
    )
  }
}

export default App;