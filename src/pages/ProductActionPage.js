import React, { Component } from 'react';

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

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type==='checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                            />
                            Available
                    </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default App;
