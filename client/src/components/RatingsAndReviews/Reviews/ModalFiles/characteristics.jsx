import React, { useState } from 'react';

const Characteristics = () => {
    
    const options = {
        Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
        Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
        Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
        Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
        Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
        Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
    }

    // TODO: correctly map out values to characteristics
    return Object.keys(options).map(char => (
        
        <div id="rating-options" key={char}>
            <div>{char}</div>
            { options[char].map((option, index) => (
                <div className="char-options" key={`${option}${index}`}>
                    <input 
                        id="option-choice"
                        key={`${option}${char}`}
                        name={char}
                        type="radio"
                        //TODO
                        
                    />
                    <label key={`${option}${index}`}/>{option}
                </div>
            ))}
        </div>
    ))
    
}

export default Characteristics;