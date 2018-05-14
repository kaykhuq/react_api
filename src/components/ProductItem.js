import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>abc</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">available</span>
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
