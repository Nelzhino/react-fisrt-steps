import React, { Component } from 'react'


const Title = ({uiColor, children}) => {
  const styles = {
    background: uiColor,
    padding: '0.3em',
    color: '#FFF',
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  return (
    <h1 style={styles}>
      { children }
    </h1>
  )
}


class Children extends Component {
  state = {
    uiColor: 'tomato'
  }

  render () {
    var { uiColor } = this.state;
    return (
      <div>
        <Title
          uiColor={uiColor}
        >
          Super <em>Ninja</em>
        </Title>
      </div>
    )
  }
}

export default Children