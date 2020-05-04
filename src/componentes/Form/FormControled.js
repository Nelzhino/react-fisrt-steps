import React, { Component } from 'react'

class InputControlado extends Component {
  state = {
    text: '',
    color: '#E8E8E8'
  }

  actualizar = (event) => {
    const text = event.target.value
    let color = 'green'

    if (text.trim() === '') {
      color = '#E8E8E8'
    }

    if (text.trim() !== '' && text.length < 5) {
      color = 'red'
    }

    this.setState({ text, color })

    // Propagando datos al padre
    this.props.onChange(this.props.name, text)
  }

  render () {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    return (
      <input
        type='text'
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
        placeholder={this.props.placeholder}
      />
    )
  }
}

class FormControled extends Component {
  state = {
    name: '',
    email: ''
  }

  actualizar = (name, text) => {
    this.setState({
      [name]: text
    })
  }
  
  render () {
    return (
      <div>
        <h1>Input Controlado</h1>
        <InputControlado
          onChange={this.actualizar}
          placeholder='Nombre Completo'
          name='name'
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder='Tu Email'
          name='email'
        />
        <h2>
          Nombre: { this.state.name }
        </h2>
        <h2>
          Email: { this.state.email }
        </h2>
      </div>
    )
  }
}

export default FormControled