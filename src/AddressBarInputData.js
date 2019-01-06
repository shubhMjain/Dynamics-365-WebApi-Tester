import React, { Component } from 'react';

class AddressBarInputData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enableParams: false,
            addRow: false,
            paramRows: [(<tr>
                <th scope="row"><input type='checkbox'></input></th>
                <td><input type='text' onChange={(e) => e.target.value.length < 2 ? this.addParamsRow() : ''}
                placeholder='New key'></input></td>
                <td><input type='text' placeholder='Value'></input></td>
                <td><input type='text' placeholder='Description'></input></td>
            </tr>)],
            inputs: {
                reqType: 'GET',
                webApiUrl: '',
                params: [{ key: '', value: '' }]
            }
        };
        this.enableDisableParams = this.enableDisableParams.bind(this);
        this.addParamsRow = this.addParamsRow.bind(this);
        this.getParamsRows = this.getParamsRows.bind(this);
    }

    enableDisableParams() {
        this.setState(state => ({
            enableParams: !state.enableParams
        }));
        console.log(this.state.paramRows)
        // this.addParamsRow();
    }

    addParamsRow() {
        const element = (<tr>
            <th scope="row"><input type='checkbox'></input></th>
            <td><input type='text' placeholder='New key'></input></td>
            <td><input type='text' placeholder='Value'></input></td>
            <td><input type='text' placeholder='Description'></input></td>
        </tr>);
        this.state.paramRows.push(element);
    }

    getParamsRows() {
        return this.state.paramRows.map(row => row)
    }

    render() {
        return (
            <div>
                <div>
                    <select value={this.state.inputs.reqType} onChange={(e) => this.setState({ inputs: { reqType: e.target.value } })} >
                        <option value='GET'>GET</option>
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
                    <input type='text' onChange={(e) => this.setState({ inputs: { webApiUrl: e.target.value ? 'SomeURL' + e.target.value : '' } })}></input>
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
                                    {/* TODO Bind key value and add to URL */}
                                    {
                                        this.state.paramRows.map(row => row)
                                    }
                                    {/* <tr>
                                        <th scope="row"><input type='checkbox'></input></th>
                                        <td><input type='text' placeholder='New key'></input></td>
                                        <td><input type='text' placeholder='Value'></input></td>
                                        <td><input type='text' placeholder='Description'></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><input type='checkbox'></input></th>
                                        <td><input type='text' placeholder='New key'></input></td>
                                        <td><input type='text' placeholder='Value'></input></td>
                                        <td><input type='text' placeholder='Description'></input></td>
                                    </tr> */}

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
