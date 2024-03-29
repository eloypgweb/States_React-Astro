import { sculptureList } from './data.js';
import { useState } from 'react';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
        console.log(index);
    }

    let sculpture = sculptureList[index];
    return (
    <>
        <button onClick={handleClick}>
        Siguiente
        </button>
        <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
        </h2>
        <h3>  
        ({index + 1} de {sculptureList.length})
        </h3>
        <img 
        src={sculpture.url} 
        alt={sculpture.alt}
        />
        <p>
        {sculpture.description}
        </p>
    </>
    );
}
