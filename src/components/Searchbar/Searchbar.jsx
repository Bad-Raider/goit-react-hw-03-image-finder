import { Component } from "react";
import css from './Searchbar.module.css'

class Searchbar extends Component{

    render() {
        return (
            <>
                <header className={css.Searchbar}>
                    <form class={css.SearchForm}>
                        <button type="submit" class={css.SearchFormButton}>
                            <span class={css.SearchFormButtonLabel}>Search</span>
                        </button>

                        <input
                            class={css.SearchFormInput}
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </>
        );
    }
} 
export default Searchbar;