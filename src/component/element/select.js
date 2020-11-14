import React, { Component } from 'react'

class Select extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={e => this.props.inputData(e.target)}
                />
            </div>
        )
    }
}

export default Select
