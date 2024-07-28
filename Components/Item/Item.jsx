import React from 'react'

import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id,name,img,price,stock }) => {
    return (
        <div key={id} className="card-item">
            <h3 style={{ justifySelf: "center" }}>{nombre}</h3>
            <img className="img" src="https://img.freepik.com/fotos-premium/botella-vino-blanco-tapon-rojo-etiqueta_664601-8179.jpg" />
            <p>Precio: <b>${precio}</b></p>
            <button>Agregar al carrito</button>
            <Link to={`/item/${id}`} classname ='option'>
                <button>Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item