import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

        const location = useLocation();
  
        // Función para verificar si la ruta está activa
        const isActive = (path) => location.pathname === path ? 'active' : '';


return <>
        <nav>
                <div className="nav-center">
                        <div className="logo">
                                <Link to="react-shop" className="link-logo">
                                        <img src="https://i.ibb.co/7Gjg8NB/logourbanshop.png"/>
                                        <div className="logo-title">
                                                <span className="color-logo1">URBAN</span>
                                                <span  className="color-logo2">SHOP</span>
                                        </div> 
                                </Link>
                        </div>     
                        <ul className="navigation">
                                <li><Link to="react-shop" className={isActive('/react-shop')}>Home</Link></li>
                                <li><Link to="react-shop/nosotros" className={isActive('/react-shop/nosotros')}>Nosotros</Link></li>
                                <li><Link to="react-shop/contacto" className={isActive('/react-shop/contacto')}>Contacto</Link></li>
                        </ul>
                        <div className="card-widget">
                                <div className="icon-avatar">
                                        <i className="fa-solid fa-user icon-user"></i>
                                </div>
                        </div>
                </div>
        </nav>
</>
}
export default Navbar
