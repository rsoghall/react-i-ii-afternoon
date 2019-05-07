import React, { Component } from 'react'
// import data from '../data';
import Card from './Card';

export class ChangeCard extends Component {
    constructor(){
        super()
        this.state = {
            rCIndex: 0
            
        }
    }
    previousCard = () => {
        this.setState({
            rCIndex: this.state.rCIndex -1
            
        })
    }
    nextCard = () => {
        this.setState({
            rCIndex: this.state.rCIndex +1
        })
    }
    
  render() {

    //   console.log('card info', this.state.cardInfo)
      const {rCIndex} = this.state
    return (
      <div>
        <Card cardInfo={this.props.contacts}
        rCIndex={rCIndex}/>

        <button onClick={this.previousCard} hidden={rCIndex === 0}> &lt; Previous</button>
        <button onClick={this.nextCard} hidden={rCIndex === this.props.contacts.length -1}>Next ></button>
        
      </div>
    )
  }
}

export default ChangeCard
