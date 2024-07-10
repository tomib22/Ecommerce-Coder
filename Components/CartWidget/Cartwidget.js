import carrito from './Assets/carrito.jpg'
import './Assets/carrito.css'
const CartWidget = () => {
return (
 <div>
<img src ={carrito} alt='carrito-widget' className="carrito"/>
<p> 0</p>
</div>
)

}

export default CartWidget