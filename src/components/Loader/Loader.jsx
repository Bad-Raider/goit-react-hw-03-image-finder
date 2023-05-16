import { Component } from 'react';
import { Blocks } from 'react-loader-spinner'

// import css from './Loader.module.css';

class Loader extends Component {

    render() {
        return (
            <div>
                <Blocks
                visible={this.props.visible}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                />
            </div>

        );
    }
};

export default Loader;
