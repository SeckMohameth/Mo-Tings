import React from 'react'
import './Explore.css'

import Sidebar from '../Components/Explore/Sidebar'
import Products from '../Components/Explore/Products'

function Explore() {


  return (
    <div>
        <h1>Explore Page</h1>
        <div className='container'>
            <div className='filter'>
                <Sidebar />
            </div>
            <div className='product-list'>
                <h1>Items posted by sellers</h1>
                <Products 
                image="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Item title"
                seller="Seller name"
                location="location"
                />
                 <Products 
                image="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Item title"
                seller="Seller name"
                location="location"
                />
                 <Products 
                image="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Item title"
                seller="Seller name"
                location="location"
                />
                 <Products 
                image="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Item title"
                seller="Seller name"
                location="location"
                />
                 <Products 
                image="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Item title"
                seller="Seller name"
                location="location"
                />
            </div>

        </div>
    </div>
  )
}

export default Explore