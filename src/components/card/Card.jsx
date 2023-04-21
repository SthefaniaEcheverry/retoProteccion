import { useState } from 'react';
import './card.css';

const Card = ({ hero }) => {
    const [isRotate, setIsRotate] = useState(false);
    const rotateHandle = () => {
        setIsRotate(!isRotate)
    }
    return (
        <div className='card' onClick={() => { rotateHandle() }}>
            <div className={`card-front ${isRotate ? 'hide' : ''}`}>
                <h3 className='card-name'>{hero.name}</h3>
                <img className='card-img' src={hero.image} alt={hero.name} />
            </div>
            <div className={`card-back ${isRotate ? '' : 'hide'}`}>
                <h3 className="card-name">{hero.name}</h3>
                <p>Full Name: {hero.fullName}</p>
                <p>Intelligence: {hero.intelligence}</p>
                <p>Strength: {hero.strength}</p>
                <p>Speed: {hero.speed}</p>
                <p>Durability: {hero.durability}</p>
                <p>Power: {hero.power}</p>
                <p>Combat: {hero.combat}</p>
            </div>
        </div>


    )
}

export default Card;