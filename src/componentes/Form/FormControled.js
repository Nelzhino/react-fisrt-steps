
import React, { Component } from 'react';

class InputControled extends Component{


    state = {
        text : '',
        color: '#e8e8e8'
    }


    update = (event) => {
        const text = event.target.value; 
        let color = 'green';

        if(text.trim() !== '' && text.length < 5){
            color = 'red';
        }

        if(text === ''){
            color = '#e8e8e8';
        }

        this.setState({text, color}); 
    }

    render(){
        const styles = {
            borderLeft: `5px solid ${ this.state.color }`,
            padding: '0.3em 0.6em',
            outline: 'none'
            
        }
        return (
            <div className="card bg-primary mb-3">
                <div className="card-body">
                    <h3 className="card-title">Valid Input Controled</h3>
                    <input 
                        type="text" className="form-control"
                        value = {this.state.text}
                        onChange = {this.update}
                        style = { styles }
                    />
                </div>
            </div>
        );
    }
}



class FormControled extends Component{


    render(){
        return (
            <div className="container m-5">
                <InputControled />
            </div>
        )
    }
}


export default FormControled;