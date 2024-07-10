import CartWidget from "../CartWidget/Cartwidget"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h3> Ecommerce</h3>
        <ul className="navbar-links">
        <li><button>Inicio</button></li>
        <li><button>Productos</button></li>
        <li><button>Contacto</button></li>
      </ul>
<CartWidget/>
    </nav>
  )
}

export default Navbar
