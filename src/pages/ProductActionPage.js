import React, { Component } from 'react';
import callApi from '../utils/apiCaller';
import { Link } from 'react-router-dom';

class App extends Component {
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
            callApi(`products/${id}`, 'GET', null).then(res => {
                let data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkStatus: data.status
                })
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
        if (id) {//update
            callApi(`products/${id}`,'PUT',{
                name: txtName,
                price: txtPrice,
                status: chkStatus,
            }).then(res=>{
                history.goBack();
            })
        } else {//new
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkStatus,
            }).then(res => {
                history.goBack();
            });
        }


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

export default App;
