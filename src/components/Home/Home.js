import "./Home.css"

import React from "react"
import Editor from "../Editor/Editor"
import Previewer from "../Previewer/Previewer"
export default class Home extends React.Component {

    constructor(props) { 
        super(props)

        this.state =  {
            input: `# Hello World
## Hi there
[Here is a link](https://google.be)
\`var x = 4;\`
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`
- Hello           
![image logo](https://images.math.cnrs.fr/local/cache-vignettes/L350xH350/arton946-a122c.png?1668437873)
> Block Quotes!
**hello world**`,
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.resetInput = this.resetInput.bind(this)
    }

    onHandleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    resetInput() {
        this.setState({ input : ''})
        console.log(this.state.input)
    }

    render() {
        return (
            <div className="home-container">
                <Editor input={this.state.input} onHandleChange={this.onHandleChange} reset={this.resetInput}/>
                <Previewer input={this.state.input} />
            </div>
        )
    }
 }