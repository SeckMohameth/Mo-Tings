import React from 'react'
import './Products.css'

function Products(props) {

  return (
    <div className='product-card'>
        <img src={props.image} />
        <div className='products-card-content'>
            <h1>{props.title}</h1>
            <h2>{props.seller}</h2>
            <h2>{props.location}</h2>
            <div className='product-btn'>
                <button>Buy</button>
                <button>Trade</button>
                <button>Borrow</button>
            </div>
        </div>
    </div>
  )
}

export default Products