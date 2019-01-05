import React, { Component } from 'react';

class AddressBarInputData extends Component {
    constructor(props){
        super(props);
        this.state = {
            enableParams: false,
            addRow: false,
            inputs: {
                reqType: 'GET',
                webApiUrl: '',
                params: [{key: '', value: ''}]
            }
        };
        this.enableDisableParams = this.enableDisableParams.bind(this);
    }

    enableDisableParams() {
        this.setState(state => ({
            enableParams: !state.enableParams
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <select value={this.state.inputs.reqType} onChange={(e) => this.setState({inputs: {reqType: e.target.value}})} >
                        <option value='GET' selected>GET</option>
                        <option value='POST'>POST</option>
                        <option value='PUT'>PUT</option>
                        <option value='DELETE'>DELETE</option>
                        <option value='PATCH'>PATCH</option>
                    </select>
                    {/* TODO  */}
                    <input type='text' disabled='true' value='Some link' title='some link'></input>
                    {/* <select>
                        <option value={this.state.} selected>V9.1</option>
                        <option>V9.0</option>
                        <option>V8.2</option>
                    </select> */}
                    <input type='text' onChange={(e) => this.setState({inputs: {webApiUrl: e.target.value ? 'SomeURL' + e.target.value : ''}})}></input>
                    <button onClick={this.enableDisableParams}>Params</button>
                    <button>Send</button>
                </div>
                {
                    this.state.enableParams ? (
                        <div >
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Key</th>
                                        <th scope="col">Value</th>
                                        <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><input type='checkbox'></input></th>
                                        <td><input type='text'></input></td>
                                        <td><input type='text'></input></td>
                                        <td><input type='text'></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td><input type='text'></input></td>
                                        <td><input type='text'></input></td>
                                        <td><input type='text'></input></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    ) : (
                            <div >
                                No Params Added!
                            </div>
                        )
                }

            </div>
        );
    }
}

export default AddressBarInputData;
