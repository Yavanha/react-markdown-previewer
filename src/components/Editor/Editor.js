import "./Editor.css";
import React from "react";
import Toolbar from "../Toolbar/Toolbar";

export default class Editor extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="editor-container">
                <Toolbar title={'Editor'}/>
                <textarea className="editor" type="text" value={this.props.input} onChange={this.props.onHandleChange}>

                </textarea>
            </div>
        )
    }
}