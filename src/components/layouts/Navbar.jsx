import { Link } from "react-router-dom"

const Navbar = () => {
return <nav>
                <div className="nav-center">
                        <div className="logo">
                                <Link to="/" className="link-logo">
                                <img src="https://i.ibb.co/7Gjg8NB/logourbanshop.png"/>
                                <div className="logo-title">
                                        <span className="color-logo1">URBAN</span>
                                        <span  className="color-logo2">SHOP</span>
                                </div> 
                                </Link>
                        </div>     
                        <ul className="navigation">
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/productos">productos</Link></li>
                                <li><Link to="productos/urbanas">Urbanas</Link></li>
                                <li><Link to="productos/running">Running</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                        <div className="card-widget">
                                <div className="icon-avatar">
                                        <i className="fa-solid fa-user icon-user"></i>
                                </div>
                        </div>
                </div>
        </nav>
}
export default Navbar
