import React from 'react';
import gramado from './images/gramado.jpeg';

const Card = () => {
    return(
        <div>
            <img alt='gramado' src={gramado}/>
            <div>
                <h2>Gramado</h2>
                <p>Rio Grande do Sul</p>
            </div>
        </div>
    )
}

export default Card;