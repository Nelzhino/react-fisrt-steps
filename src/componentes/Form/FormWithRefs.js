import React, { Component } from 'react'

class InpuntNoControlado extends Component {
  nombre = React.createRef()
  email = React.createRef()

  handleClick = () => {
    const nombre = this.nombre.current.value
    const email = this.email.current.value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <div>
        <input
          type="text"
          ref={this.nombre}
          placeholder='Nombre'
        />
        <input
          type="text"
          ref={this.email}
          placeholder='Email'
        />
        <button onClick={this.handleClick}>
          Enviar
        </button>
      </div>
    )
  }
}

class FormRefs extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Inputs No controlados Refs
        </h1>
        <InpuntNoControlado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default FormRefs