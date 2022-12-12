import "./Toolbar.css"

import React from "react"

export default class Toolbar extends React.Component { 



    render() {
        return (    <header className="toolbar">
        <h4 className="toolbar-title">{this.props.title}</h4>
        {this.props.optionEnabled && <button onClick={this.props.onClickHandle} className="expand-btn">
            <i className="fa-solid fa-delete-left"></i>
        </button>}
    </header>)
    }
}