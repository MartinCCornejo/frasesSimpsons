import React from 'react';
import Bart from '../assets/bart.png';


const Frase = () => {
    return (
        <div className='border border-3 border-warning p-4'>
            <h1 className='text-light'>Bart Simpsons</h1>
            <hr className='text-warning'/>
            <img src={Bart} alt="Imagen de Bart Simpsons" className='img-fluid' />
            <div className='p-3 bg-light'>
                <p className='lead fs-2'>Ay caramba!</p>
                <p className='text-secondary fw-light fs-5'>Bart Simpsons in The Simpsons</p>
            </div>
        </div>
    );
};

export default Frase;