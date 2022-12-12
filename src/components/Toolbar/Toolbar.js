import "./Toolbar.css"

import React from "react"

export default class Toolbar extends React.Component { 

    constructor(props) {
        super(props);
    }

    render() {
        return (    <header className="toolbar">
        <h4 className="toolbar-title">{this.props.title}</h4>
        <button className="expand-btn">
            <i className="fa-solid fa-maximize"></i>
        </button>
    </header>)
    }
}