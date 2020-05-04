
import React, { Component } from 'react';

const Header = () => {
    const subtitleStyles = {
      fontWeight: 'bold'
    }
  
    const headerStyles  = {
      margin: '0.6em',
      borderRadius: '0.3em',
      border: '1px solid #d2d2d2',
      padding: '2em 0.4em',
      fontFamily: 'monospace',
      fontSize: '17px'
    }
  
    return (
      <header style={headerStyles}>
        <div>
          Comunicacion entre componentes
        </div>
        <div style={subtitleStyles}>
          Metodos de Instancia 
          <span role='img' aria-label='flame' >
            🔥
          </span>
        </div>
      </header>
    )
  }
  



const boxStyles = {
      padding: '0.5em',
      margin: ' 0.5em',
      border: '1px solid gray',
      borderRadius: '0.3em',
      textAlign: 'center'
  }


class List extends Component {
    render() {
        const { list, render} = this.props;
        return (
            <div>
                {list.map( (item, index) => {

                        if(render){
                           return render(item, index)
                        }
                        return (
                            <li key={ item.name  } >{ item.name } </li>
                        )
                    })
                }
            </div>
        )
    }
}

class PatronRenderProps extends Component {

    state = {
        fruits: [
            {name: 'Fresa', price: '20'},
            {name: 'Limon', price: '2'},
            {name: 'Kiwi', price: '30'},
            {name: 'Manzana', price: '50'}
        ]
    }

    render () {
        const {fruits} = this.state;
        return (
          <div style={boxStyles}>
            <Header />
            <List 
                list={fruits} 
                render={(item, index) => (
                          <div key={index} className="alert alert-warning" role="alert" >
                                { item.name } - { item.price }USD  
                          </div>
                        )}
                />
          </div>
        )
      }

}

export default PatronRenderProps