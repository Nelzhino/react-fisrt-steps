import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './css/ImperativeMethod.css'




const useFetch = (url, initialState = []) => {

  
  const [ data, setData ] = useState(initialState)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [ url ])

  return [
    data
  ]

}


const Navegation = () => (
  <nav className="nav">
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='active'>Ninja</NavLink>
    <NavLink to='/videos' activeClassName='active'>Videos</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)

const Ninja = (props) => {

  const [ user ] = useFetch('https://jsonplaceholder.typicode.com/users/' + props.location.state.id, {})
  
  const handleSend = () => {
    props.history.push({
      pathname: '/videos',
      state: {
        message: 'Sent from ninja to videos...'
      }
    })
  }

  return (
    <div>
      <h1>Ninja User</h1>
      <p>Name: { user.name }</p>
      <p>Username: { user.username }</p>
      <p>Email: { user.email }</p>
      <button onClick={handleSend}  >SEND TO VIDEOS</button>
    </div>
  )
}

const Videos = (props) => {
  console.log('f', props.location)
  return (
      <div>
        <h1>Videos</h1>
        <p>
          {
            props.location.state? props.location.state.message: 'Videos from Link'
          }
        </p>
      </div>
  )
}

const NavegacionImperativa = ({ history }) => {
  const handleChange = () =>{
      history.push({
        pathname: '/ninja',
        state: {
          id: 1,
          message: 'hola desde button PUSH'
        }
      });
  } 
    
  return (
    <div>
      <button onClick={history.goBack}>
        BACK
      </button>
      <button onClick={history.goForward}>
        FORWARD
      </button>
      <button onClick={() => {
        history.go(-2)
      }}>
        Go 2 BACK
      </button>
      <button onClick={() => {
        history.replace('/ninja')
      }}>
        GO NINJA REPLACE
      </button>

      <button onClick={handleChange}>
        SEND PUSH TO NINJA
      </button>
    </div>
  )
}

const ImperativeMethod = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route component={NavegacionImperativa} />
      <Route path='/' exact component={Home} />
      <Route path='/ninja' component={Ninja} />
      <Route path='/videos' component={Videos} />
    </BrowserRouter>
  )
}

export default ImperativeMethod