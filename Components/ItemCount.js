// ItemCount.js
import React, { useState } from 'react';
import './ItemCount.css'; // Opcional, si quieres agregar estilos

const ItemCount = ({ stock,initial, onAdd }) => {
  // Estado local para llevar el conteo actual
  const [quantity, setQuantity] = useState(initial);

  // Función para incrementar el contador
  const Increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  // Función para decrementar el contador
  const Decrement = () => {
    if (quantity> 1) {
      setQuantity(quantity - 1)
    }
  }

  // Función para manejar la acción de añadir al carrito
  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="Counter">
        <div className="Controls">
         <button className="button" onClick={decrement}>-</button> 
         <h4 className="number" >{quantity} </h4> 
         <button className="button" onClick={increment}>+</button> 
         </div>
         <div>
      <button className="button" onClick={() disabled=> onAdd(quantity)} disabled={!stock} Agregar al carrito > 
        </button>
        </div>
  
    </div>
    </div>
  )
}

export default ItemCount
