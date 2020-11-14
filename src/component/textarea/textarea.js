import React, { Component } from 'react'

class TextArea extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                    
                <textarea name={this.props.name} value={this.props.value} onChange = {e => this.props.textArea(e.target)} />
            </div>
        )
    }
}

export default TextArea
