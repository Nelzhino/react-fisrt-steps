import React, { useState, useEffect } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hooks Personalizados 
      </h1>
    </header>
  )
}

// Create a new Hooks 
const useSizes = () => {
  const [ width, setWith ] = useState(window.innerWidth)
  const [ height, setHeight ] = useState(window.innerHeight)

  // Agregar listener
  const handleResize = () => {
    setWith(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return {
    width,
    height
  }
}

const HookPersonalizado = () => {
  const { height, width } = useSizes()

  return (
    <div>
      <Header />
      <h1>
        Width: { width }px  Height: { height }px
      </h1>
    </div>
  )
}

export default HookPersonalizado