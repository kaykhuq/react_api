import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductsRequest, actGetProductsRequest, actUpdateProductsRequest } from '../actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkStatus: ''
        }
    }
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkStatus
        }
        if (id) {//update
            this.props.onUpdateProduct(product);
        } else {//new
            this.props.onAddProduct(product);
        }
        history.goBack();

    }
    render() {
        const { txtName, txtPrice, chkStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <legend>Product Detail</legend>
                    <div className="form-group">
                        <label >Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name='txtName'
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input
                            type="text"
                            className="form-control"
                            name='txtPrice'
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name='chkStatus'
                                value={chkStatus}
                                onChange={this.onChange}
                                checked={chkStatus}
                            />
                            Available
                    </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger">Return</Link>&nbsp;
                    <button type="submit" className="btn btn-primary"> Save </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => { dispatch(actAddProductsRequest(product)) },
        onEditProduct: (id) => { dispatch(actGetProductsRequest(id)) },
        onUpdateProduct: (product) => { dispatch(actUpdateProductsRequest(product)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
