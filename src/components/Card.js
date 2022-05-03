import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="Card">
            <img src={props.image} alt='senegal boat docks'/>
            <div className='Card-info'>
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
            </div>
        </div>
    )
}

export default Card;