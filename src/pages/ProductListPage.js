import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';

class ProductListPage extends Component {
    render() {
        const products = [
            {
                id:1,
                name:"abc",
                price:500,
                status:true,

            }
        ]
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">Add Product</button>
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

export default ProductListPage;
