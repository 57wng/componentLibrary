import React from 'react';

const Card = ({children, elevation, hover, color, customClass}) => {
    return (
        <div
            className={`card-container ${elevation === undefined ? '1' : "_" + elevation} ${hover === true ? 'hover' : ''} ${
                customClass === undefined ? '' : customClass
            } ${color === 'dark' ? 'dark' : 'light'}`} data-test={"card-component"}>
            {children}
        </div>
    )
}

export default Card;