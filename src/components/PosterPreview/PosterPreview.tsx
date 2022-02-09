import React from 'react';
import {mediaURL} from "../../configs/urls";
import "../MoviesListCard/MoviesListCard.css"

const PosterPreview = ({poster_path}: any) => {
    return (
        <div className={'card__poster'}>
            <img src={mediaURL + poster_path} alt=""/>
        </div>
    );
};

export default PosterPreview;
