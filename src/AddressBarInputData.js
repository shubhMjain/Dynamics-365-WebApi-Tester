import React, { Component } from 'react';

class AddressBarInputData extends Component {
    render() {
        return (
            <div className="App">
                <select>
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                    <option>PATCH</option>
                </select>
            </div>
        );
    }
}

export default AddressBarInputData;
