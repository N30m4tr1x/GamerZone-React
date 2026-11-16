
import './Nosotros.css';
import Contador from '../components/Contador';
import MostrarOcultar from '../components/MostrarOcultar';

function Nosotros() {
    return (
        <section className="nosotros" id="nosotros">

            <div className="nosotros-content">

                <p className="nosotros-label">CONOCE GAMERZONE</p>

                <h1>SOBRE NOSOTROS</h1>

                <p className="nosotros-description">
                    GamerZone es un espacio dedicado a los amantes de los videojuegos.
                    Nuestro objetivo es ofrecer una plataforma donde los jugadores
                    puedan descubrir nuevos títulos, explorar diferentes géneros
                    y encontrar su próxima aventura.
                </p>

                <p className="nosotros-description">
                    Desde grandes mundos abiertos hasta emocionantes desafíos,
                    buscamos reunir experiencias para todo tipo de jugadores.
                </p>
                
                <Contador />
                <MostrarOcultar/>

            </div>

        </section>
    );
}

export default Nosotros;
