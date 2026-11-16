
import './GameCard.css';

function GameCard({ imagen, titulo, genero, descripcion }) {
    return (
        <article className="game-card">
            <img src={imagen} alt={titulo} className="game-image" />

            <div className="game-info">
                <h3>{titulo}</h3>
                <span className="game-genre">{genero}</span>
                <p>{descripcion}</p>
            </div>
        </article>
    );
}

export default GameCard;
