import React, { Component } from 'react'
import propTypes from 'prop-types'

class Profile extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
  }

  render () {
    const { name, bio, email, age } = this.props
    return (
      <div>
        <h1>{ name }</h1>
        <p>
          { bio }
        </p>
        <a href={`mailto:${email}`}>
          { email }
        </a>
        <p>
          { age }
        </p>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Profile
          name={11221322}
          bio='Soy un desarrollador mail@mail.com'
          email='my-email@mail.com'
          age = {true}
        />
      </div>
    )
  }
}

export default App