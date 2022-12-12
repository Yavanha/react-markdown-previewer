import "./Editor.css";
import React from "react";
import Toolbar from "../Toolbar/Toolbar";

export default class Editor extends React.Component {


    render() {
        return (
            <div className="editor-container">
                <Toolbar title={'Editor'} optionEnabled={true} onClickHandle={this.props.reset}/>
                <textarea id="editor" className="editor" type="text" value={this.props.input} onChange={this.props.onHandleChange}>

                </textarea>
            </div>
        )
    }
}