import { Component } from "react";
import css from './App.module.css';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
// import Modal from "./Modal/Modal";
// import Button from "./Button/Button";
import Loader from "./Loader/Loader"; 


class App extends Component {

  state = {
    name: '',
    isLoading: false,
    // error: null,
  };

  onSubmit = (nameForm) => {
    this.setState({name: nameForm.toLowerCase()})
  };

  isLoading = (value) => {
    this.setState({ isLoading: value });
  };

  render() {
    return (
      <div className={css.App} >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          name={this.state.name}
          isLoading={this.isLoading}
        />
        {/* <Modal/> */}
        {/* <Button /> */}
        <Loader visible={ this.state.isLoading} />
      </div>
    )
  }
}

export default App;