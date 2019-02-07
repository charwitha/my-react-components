import React, { Component } from 'react';
import './App.less'
import { Carousel } from './carousel/Carousel';
import imagePaths from '../../imagedata.json';

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
            <div className="mainWrapper container">
            <div className="row">
            <div className="col-sm-12">
            <Carousel slides={imagePaths.images} />
            </div>
            </div>
            </div>
            </div>
            );
        }
    }

    export default App;
