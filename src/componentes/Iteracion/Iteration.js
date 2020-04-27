import React, { Component } from "react";

const frutas = ['Banano', 'Manzana', 'Pera', 'Kiwi', 'Uva'];

class Iteration extends Component {

    render() {
        return (
            <div>
                <ul>
                    { frutas.map( ( fruta ) => {
                            return (
                                <li>{fruta}</li>
                            )
                        }) 
                    }
                </ul>
            </div>
        );
    }
}


export default Iteration;