import React from 'react'

export default function Card(props) {
    // const {name} = props
    let rCardInfo = props.cardInfo.map((item, index) => 
                <div>
                    <h1>{index +1}/{props.cardInfo.length}</h1>
                    <h1>{item.name.first} {item.name.last}</h1>
                    <p>From: {item.city}, {item.country}</p>
                    <p>Job Title: {item.title}</p>
                    <p>Employer:{item.employer}</p>
                    <div>Favorite Movies: <ol>{item.favoriteMovies.map(movie => {
                            return <li>{movie}</li>
                            
                    } )}</ol></div>

                </div>
                )

                console.log("propsIndex", props.rCIndex)
    return (
       
        <div>
            
                
            {rCardInfo[props.rCIndex]}
            
                    
                

                
        </div>

        
        
  )
}

