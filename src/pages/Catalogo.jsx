
import './Catalogo.css';
import GameCard from '../components/GameCard';
import { useEffect, useState } from 'react';
import { obtenerJuegos } from '../services/juegosServices';

function Catalogo() {

    const [videojuegos, setVideojuegos] = useState([]);

    useEffect(() => {
        async function cargarJuegos() {
            try {
                const datos = await obtenerJuegos();
                setVideojuegos(datos);
            } catch (error) {
                console.error('Error al cargar los videojuegos:', error);
            }
        }

        cargarJuegos();
    }, []);
    const imagenesJuegos = {
        'The Legend of Zelda: Breath of the Wild': '/images/BOTW.jpg',
        'God of War Ragnarök': '/images/GOW_RAG.jpg',
        'Elden Ring': '/images/ELDEN_RING.jpg',
        'Forza Horizon 5': '/images/FORZA-5.jpg',
        'Hollow Knight': '/images/Hollow-knight.jpg',
        'Cyberpunk' : '/images/CYBER-PUNK.jpg',
        'Minecraft' : '/images/Minecraft.webp'
        };

    return (
        <section className="catalogo" id="catalogo">

            <div className="catalogo-header">
                <p className="catalogo-label">EXPLORA NUEVOS MUNDOS</p>
                <h1>NUESTRO CATÁLOGO</h1>
                <p className="catalogo-description">
                    Encuentra tu próxima aventura entre nuestros videojuegos.
                </p>
            </div>

            <div className="catalogo-grid">
                {videojuegos.map((juego) => (
                <GameCard
                key={juego.id}
                imagen={imagenesJuegos[juego.nombre]}
                titulo={juego.nombre}
                genero={juego.genero}
                descripcion={`Lanzado en ${juego.anio}`}
                />
                ))}
            </div>

        </section>
    );
}

export default Catalogo;
