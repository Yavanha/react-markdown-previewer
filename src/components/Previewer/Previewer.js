
import "./Previewser.css"
import React from "react"

export default class Previewser extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div className="previewer-container">
            <Toolbar title={'Previewer'}/>
            <div className="previewer" type="text" value={this.props.input} onChange={this.props.onHandleChange}>

            </div>
        </div>
        )
    }


}