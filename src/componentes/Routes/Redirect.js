import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './Redirect.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='active'>Login</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)

const Login = ({ location }) => {

  if (location.state) {
    return <h2>{ location.state.message }</h2>
  }

  return (
    <h1>Login</h1>
  )
}

const isAuth = false

const Perfil = () => {
  return isAuth
    ? <h2>Bienvenido a tu perfil</h2>
    : <Redirect to={{
        pathname: '/login',
        state: {
          message: 'Debes de hacer login para acceder a tu perfil'
        }
      }} />
}

const Redirect = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/login' render={Login} />
      <Route path='/perfil' render={Perfil} />
      <Redirect from='/p' to='/perfil' />
    </BrowserRouter>
  )
}

export default Redirect