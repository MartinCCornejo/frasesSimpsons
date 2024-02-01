import React from 'react';

const Frase = ({personaje}) => {
    return (
        <article className='border border-3 border-warning p-4'>
            <h1 className='text-light'>{personaje.character}</h1>
            <hr className='text-warning'/>
            <img src={personaje.image} alt={personaje.character} className='img-fluid' />
            <div className='p-3 bg-light mt-3'>
                <p className='lead fs-4'>{personaje.quote}</p>
                <p className='text-secondary fw-light fs-5 fst-italic'>{personaje.character} in The Simpsons</p>
            </div>
        </article>
    );
};

export default Frase;