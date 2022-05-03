import React from 'react'

function Products(props) {
  return (
    <div>
        <img src={props.image} />
        <div>
            <h1>{props.title}</h1>
            <h2>{props.seller}</h2>
            <h2>{props.location}</h2>
            <div>
                <button>Buy</button>
                <button>Trade</button>
                <button>Borrow</button>
            </div>
        </div>
    </div>
  )
}

export default Products