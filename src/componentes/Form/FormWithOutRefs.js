
import React, { Component } from 'react';



class InputElementNotControled extends Component {


    handleSubmit = (event) => {
        console.log(event); 
        event.preventDefault();
        const nombre = event.target[0].value;
        const email = event.target[1].value;

        this.props.onSend({ nombre, email });
    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name"></input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email"></input>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}


class FormWithOutRefs extends Component{
    send = (data) => {
        console.log(data);
    }

    render () {
        return (
          <div className="container m-2">
            <h1>
              Inputs Not Form Controled
            </h1>
            <InputElementNotControled onSend={this.send} />
          </div>
        )
      }


}


export default FormWithOutRefs;