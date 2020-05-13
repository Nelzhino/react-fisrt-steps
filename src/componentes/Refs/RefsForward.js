
import React,{ Component } from 'react';

const FancyInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" placeholder="text" ref={ ref } />
        </div>
    )
})

class RefsForward extends Component {

    entrada = React.createRef()

    componentDidMount(){
        console.log(this.entrada);
    }

    handleFocus = () => {
        this.entrada.current.focus()
    }

    handleBlur = () => {
        this.entrada.current.blur()
    }

    render(){
        return (
            <div>
                <h1>Test about Refs Forward</h1>
                <FancyInput ref={ this.entrada }  />
                <button onClick={this.handleFocus}>Focus</button> 
                <button onClick={this.handleBlur}>Blur</button>     
            </div>   
        )
    }

}


export default RefsForward;