
import './Fondo-Animado.css';

function FondoAnimado() {
    return (
        <video
            className="fondo-animado"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/images/Fondo-2.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
        </video>
    );
}

export default FondoAnimado;
