
import { useState } from 'react';
import './Contador.css';
function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className="contador">
            <h2>CONTADOR GAMER</h2>

            <p>{contador}</p>

            <button onClick={() => setContador(contador + 1)}>
                AUMENTAR
            </button>

            <button onClick={() => setContador(contador - 1)}>
                DISMINUIR
            </button>
        </div>
    );
}

export default Contador;
