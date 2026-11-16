
import Hero from '../components/Hero';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <Hero
                titulo="TU PRÓXIMA AVENTURA COMIENZA AQUÍ"
                descripcion="Descubre nuevos mundos, explora grandes aventuras y encuentra los videojuegos que llevarán tu experiencia gamer al siguiente nivel."
            >
                <Link to="/catalogo" className="hero-button">
                    EXPLORAR CATÁLOGO
                </Link>
            </Hero>
        </div>
    );
}

export default Home;
