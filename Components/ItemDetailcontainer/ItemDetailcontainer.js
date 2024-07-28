import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncmock'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    getProductById('1')
      .then(response => {
        setProductoSeleccionado(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleAdd = (quantity) => {
    setCartCount(cartCount + quantity)
  }

  if (!productoSeleccionado) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>
        Detalle del producto {productoSeleccionado.name}
      </p>
      <Item key={productoSeleccionado.id} id={productoSeleccionado.id} name={productoSeleccionado.name} price={productoSeleccionado.price} />
      <ItemCount stock={productoSeleccionado.stock} initial={1} onAdd={handleAdd} />
      <p>Carrito: {cartCount} items</p>
    </div>
  )
}

export default ItemDetailContainer
