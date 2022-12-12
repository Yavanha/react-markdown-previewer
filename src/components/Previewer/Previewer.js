
import "./Previewer.css"
import React from "react"
import { marked } from "marked"
import Toolbar from "../Toolbar/Toolbar"

export default class Previewer extends React.Component {
    

    render() { 
        const str = this.props.input
        console.log(str)
        const html = marked.parse(str)
        return (
            <div className="previewer-container">
            <Toolbar title={'Previewer'}/>
            <div id="preview" className="previewer" dangerouslySetInnerHTML={{__html: html}} type="text" value={this.props.input} onChange={this.props.onHandleChange}>
            </div>
        </div>
        )
    }

   


}