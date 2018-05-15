import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const { product, index } = this.props;
        const statusName = product.status ? 'Available' : 'Out of stock';
        const statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>&nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
