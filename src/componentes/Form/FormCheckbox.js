import React, { Component } from 'react'

class FormCheckbox extends Component {
  state = {
    active: true
  }

  handleChange = (event) => {
    this.setState({
      active: event.target.checked
    })
  }

  render () {
    const { active } = this.state
    return (
      <div>
        <form>
          <input
            type="checkbox"
            checked={active}
            onChange={this.handleChange}  
          />
        </form>
        {active && (
          <h1>
            Etiqueta Checkbox 
          </h1>
        )}
      </div>
    )
  }
}

export default FormCheckbox