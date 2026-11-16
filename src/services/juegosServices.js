const API_URL = 'http://localhost:5194/api/Juegos';

export async function obtenerJuegos() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error('Error al obtener los videojuegos');
    }

    return await respuesta.json();
}