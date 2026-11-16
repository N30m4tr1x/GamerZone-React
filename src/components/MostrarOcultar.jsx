
import { useState } from 'react';
import './MostrarOcultar.css';

function MostrarOcultar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="mostrar-ocultar">
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'OCULTAR INFORMACIÓN' : 'MOSTRAR INFORMACIÓN'}
            </button>

            {visible && (
                <p>
                    En GamerZone creemos que cada videojuego ofrece
                    una aventura única. ¡Encuentra la tuya!
                </p>
            )}
        </div>
    );
}

export default MostrarOcultar;
