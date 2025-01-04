import React from 'react';
import { Link } from 'react-router-dom';

export default function FancyButton({backgroundColor, onClick, destination, buttonText}) {

    //button cannot be a link and a function
    if (destination && onClick) {
        throw new Error('Fancy button cannot be both a hyperlink and have a function');
    };

    const random = Math.random();

    function toggleHovered(randomHash) {
        const wrapper = document.getElementById('fancyButtonWrapper'+randomHash);
        const text = document.getElementById('fancyButtonText'+randomHash);
        const arrow = document.getElementById('fancyButtonArrow'+random);

        wrapper.classList.toggle('hovered');
        text.classList.toggle('hovered');
        arrow.classList.toggle('hovered');
    };

    //if the button is a link
    if (destination) {
        return (
            <React.Fragment>
                <div style={{backgroundColor: backgroundColor ? backgroundColor : 'white'}} className="fancyButtonWrapper" id={`fancyButtonWrapper${random}`} onMouseOver={() => {toggleHovered(random)}} onMouseOut={() => {toggleHovered(random)}}>

                    <Link to={destination}>

                        <h3 className="fancyButtonText" id={`fancyButtonText${random}`}>
                            {buttonText}
                        </h3>
                        <p className="fancyButtonArrow" id={`fancyButtonArrow${random}`}>
                            →
                        </p>

                    </Link>
                    
                </div>
            </React.Fragment>
        );
    }

    //if the button is a function
    else if (onClick) {
        return (
            <React.Fragment>
                <div style={{backgroundColor: backgroundColor ? backgroundColor : 'transparent'}} id={`fancyButtonWrapper${random}`} className="fancyButtonWrapper" onMouseOver={() => {toggleHovered(random)}} onMouseOut={() => {toggleHovered(random)}}>

                    <button onClick={() => {onClick()}}>

                        <h3 className="fancyButtonText" id={`fancyButtonText${random}`}>
                            {buttonText}
                        </h3>
                        <p className="fancyButtonArrow" id={`fancyButtonArrow${random}`}>
                            →
                        </p>

                    </button>

                </div>
            </React.Fragment>
        );
    };
};