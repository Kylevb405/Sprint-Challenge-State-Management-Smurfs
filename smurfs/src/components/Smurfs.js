import React from 'react';
import { useContext } from 'react';
import { SmurfContext } from '../Contexts/SmurfContext';

const Smurfs = () => {
    const { smurf } = useContext(SmurfContext);

    return (
        <div>

        <h1> Smurf </h1>

        { smurf.map (smrf => (
            <div>
                <h1> { smrf.name } </h1>
                <h1> { smrf.age } </h1>
                <h1> { smrf.height } </h1>
                
            </div>
        ))};

        </div>
    )
};

export default Smurfs