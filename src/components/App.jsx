import { Component } from "react";
import css from './App.module.css';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
// import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import Loader from "./Loader/Loader"; 


class App extends Component {

  BASE_URL = 'u_7h5ye579eo'



  render() {
    
    return (
      <div className={css.App} >
        <Searchbar />
        <ImageGallery />
        {/* <Modal/> */}
        <Button />
        <Loader/>
      </div>
    )
  }
}

export default App;