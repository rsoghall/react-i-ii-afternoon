import React, { Component } from 'react'

export class AddCard extends Component {
  constructor(){
    super();
    this.state = {
      first: '',
      last: '',
      city: '',
      country: '',
      title: '',
      employer: '',
      favoriteMovies: [],
      movie: ''

    }
  }
  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit =(e) => {
    e.preventDefault()
    const {first, last, city, country, title, employer, favoriteMovies} = this.state
    // console.log({name, city, country, title, employer})
    this.props.add({name:{first, last}, city, country, title, employer, favoriteMovies})
    this.setState({
      first: '',
      last: '',
      city: '',
      country: '',
      title: '',
      employer: '',
      favoriteMovies: [],
      movie: ''

    })
    
  }
  handleMovie = (e) => {
    e.preventDefault()
    const {favoriteMovies, movie} = this.state
    this.setState ({
      favoriteMovies: [...favoriteMovies, movie], movie: ''
    })
    
  }
  render() {
    
    const {first, last, city, country, title, employer, favoriteMovies, movie} = this.state

    let displayMovies = favoriteMovies.map((val, i) => <li key={i}>{val}</li>)
    return (
      <> {/* shorthand for React.Fragment*/}
      <form onSubmit={this.handleSubmit}> 
        {/* name is useed to make only one handler for all inputs */}
        
        <input onChange={this.handleInputs} value={first} type="text" name="first" placeholder="First Name"/>
        <input onChange={this.handleInputs} value={last} type="text" name="last" placeholder="Last Name"/> 
        <input onChange={this.handleInputs} value={city} type="text" name="city" placeholder="City"/>
        <input onChange={this.handleInputs} value={country} type="text" name="country" placeholder="Country"/>
        <input onChange={this.handleInputs} value={title} type="text" name="title" placeholder="Job Title"/>
        <input onChange={this.handleInputs} value={employer} type="text" name="employer" placeholder="Employer"/>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={this.handleMovie}>
        <input onChange={this.handleInputs} value={movie} type="text" name="movie" placeholder="Movie"/>
        <button type="submit">Add</button>
      </form>
      <ol>
      {displayMovies}
      </ol>
      {/* </> = shorthand for <React.Fragment>*/}
      </>  
    )
  }
}

export default AddCard
