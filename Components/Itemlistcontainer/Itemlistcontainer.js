import React, { useState, useEffect } from 'react'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  // Example ofhow you might fetch or update the products in the future
  useEffect(() => {
    // Simulating a fetch call
    const fetchProducts = async () => {
      const response = await new Promise(resolve => {
        setTimeout(() => resolve([
          { id: 1, name: 'Mesa' },
          { id: 2, name: 'Silla' },
          // add more products as needed
        ]), 1000)
      });
      setProducts(response)
    }

    fetchProducts()
  }, [])

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-item">
              {product.name}
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  )
}

export default ItemListContainer
