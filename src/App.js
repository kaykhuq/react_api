import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import routes from './routes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-info mb-10">Add Product</button>
                            <ProductList />
                        </div> */}
                        {this.showContent(routes)}
                    </div>
                </div>
            </div>
        );
    }
    showContent(routes){
        var result=null;

        return 
    }
}

export default App;
