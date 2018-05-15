import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import { connect } from 'react-redux';
import callApi from '../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
        });
    }

    onDelete = (id) => {
        var { products } = this.state;
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {//ok
                var index = this.findIndex(products, id);
                if (index !== -1) {
                    products.splice(index, 1);
                    this.setState({
                        products: products
                    })
                }
            }
        });
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id === id)
                result = index;
        })
        return result;
    }

    render() {
        const { products } = this.state;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-info mb-10">Add Product</Link>
                <ProductList >
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        onDelete={this.onDelete}
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps, null)(ProductListPage);
