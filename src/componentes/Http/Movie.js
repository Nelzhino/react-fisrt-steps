import React, { Component } from 'react'
import styles from './css/Movie.module.css';


const CardMovieComponent = ({ movie }) => {
    return(
      <div className="container mt-5" >
        <div className="card">
            <div className="card-header">
                <h3>{ movie.Title ? movie.Title : 'No exist title' }</h3>
            </div>
            <div className="card-body">
              <p> { movie.Plot ? movie.Plot : 'No exist plot' } </p>
              {
                movie.Poster && (
                  <img src={ movie.Poster } alt='Poster' className= { styles.componentImg }/>
                )
              }
            </div>
        </div>
      </div>
    )
}



class Movie extends Component {
  state = {
    movie: {},
    show: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=2e538007'

    if(title !== ''){
      fetch(url + '&t=' + title)
        .then(res => res.json())
        .then((movie) => this.setState({ movie, show: true }) )
    }
    else{
      this.setState({ movie: {}, show: false })
    }


  }

  render () {
    const { movie } = this.state


    return (
      <div className="container m-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Search Movie</label>
            <input
              type="text"
              placeholder='Search Movie'
              className="form-control"
            />
          </div>
          <button className="btn btn-outline-success">
            Search
          </button>
        </form>
        {
          this.state.show && ( <CardMovieComponent  movie={ movie } /> )
        }
      </div>
    )
  }
}

export default Movie