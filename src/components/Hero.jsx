
import './Hero.css';

function Hero({ titulo, descripcion, children }) {
    return (
        <section className="hero">
            <div className="hero-content">

                <p className="hero-label">
                    BIENVENIDO AL UNIVERSO GAMER
                </p>

                <h1>{titulo}</h1>

                <p className="hero-description">
                    {descripcion}
                </p>

                {children}

            </div>
        </section>
    );
}

export default Hero;
