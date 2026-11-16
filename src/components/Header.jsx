
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header">
            <div className="header-container">
              <Link to="/" className="logo">
                GAMER<span>ZONE</span>
                </Link>

                <nav className="navbar">
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogo">Catálogo</Link>
                    <Link to="/nosotros">Nosotros</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
