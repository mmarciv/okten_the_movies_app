import React from 'react';
import "../MoviesListCard/MoviesListCard.css"

const MovieInfo = ({card: {id, title, overview, rating}}: any) => {
    return (
        <div className={'card__info'}>
            <h3>{title}</h3>
            <div>{overview}</div>
        </div>
    );
};

export default MovieInfo;
