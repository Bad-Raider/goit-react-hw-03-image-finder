import { Component } from "react";
import css from './Searchbar.module.css'

class Searchbar extends Component{
    
    state = {
        name: '',
    };

    handleOnChange = (e) => {
        console.log(e.target.value);
      this.setState({name: e.currentTarget.value})   
    };

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.name);
        this.setState({
            name: '',
        });
    };

    


    render() {
        return (
            <>
                <header className={css.Searchbar}>
                    <form
                        className={css.SearchForm}
                    onSubmit={this.handleOnSubmit}>
                        <button type="submit" className={css.SearchFormButton}>
                            <span className={css.SearchFormButtonLabel}>Search</span>
                        </button>

                        <input
                            onChange={this.handleOnChange}
                            className={css.SearchFormInput}
                            value={this.state.name}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </>
        );
    }
} 
export default Searchbar;