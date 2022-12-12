import "./Home.css"

import React from "react"
import Editor from "../Editor/Editor"
export default class Home extends React.Component {

    constructor(props) { 
        super(props)

        this.state =  {
            input: '',
        }
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    onHandleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div className="home-container">
                <Editor input={this.state.input} onHandleChange= {this.onHandleChange}/>
            </div>
        )
    }
 }