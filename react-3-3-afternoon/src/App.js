import React, { Component } from 'react';
import './App.css';
import ChangeCard from './components/ChangeCard';
import AddCard from './components/AddCard';
import data from './data'



class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data
    }
  }
  handleAddContact = (newContact) => {
    const freshContacts = [...this.state.data, newContact]
    this.setState({
      data: freshContacts
    })
  }
  render() {
    return (
   <body> 
      <div className="App">
      <div className="topBox">
      <div className="card"></div>
       <h3>Home</h3>
       
        <ChangeCard contacts={this.state.data}/>
        <AddCard add={this.handleAddContact}/>
        </div>
      </div>
      </body>  
    );
  }
}

export default App;
