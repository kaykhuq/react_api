import React, { Component } from 'react';

class App extends Component {
    onSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <legend>Product Detail</legend>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Status</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" />
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
